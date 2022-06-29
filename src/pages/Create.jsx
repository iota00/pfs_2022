import React, {useState} from 'react'
import Footer from '../compenents/Footer/Footer';
import Header from '../compenents/Header/Header';
import "./Create.css"
import Add from '../compenents/add-image/component'
import "../assets/FONTS/fonts.css"


import { ethers } from "ethers"
import Web3Modal from "web3modal"
import { create as ipfsHttpClient } from "ipfs-http-client"
import {useNavigate} from "react-router-dom";

// import addresses

import {
    nftMarketAddress,
    nftAddress,

} from "../config"

// import contract's artifacts

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/Market.json";

/* In this component we setup IPFS to host our nft data of file storage */

// set up an ipfs endpoint:
// const endpoint = "https://ipfs.infura.io:5001/"


const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");


const Create = () => {
        // States:
    const [fileUrl, setFileUrl] = useState(null);
    const [formInput, setFormInput] = useState({
        price: '',
        name: '',
        description: '',
        collection:'',
        category: '',
    });

    // brings router
    const router = useNavigate()

    // set up a function to fireoff when we update files in our form - we can add our NFT images - IPFS
    async function changeImage(e) {
        const file = e.target.files[0];
        try {

            const added = await client.add(file, {
                progress: (prog) => console.log(`progress: ${prog}`)
            })
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            setFileUrl(url);
            console.log({url});
        } catch (err) {
            console.log(`Error uploading: ${err}`)
        }
    }

    // Handle input changes

    function change(e) {
        setFormInput({ ...formInput, [e.target.name]: e.target.value })
    }
    // handle selected value
    

    // create market
    async function createMarket() {
        const { name, price, description, collection, category } = formInput;
        if (!name || !price || !description || !fileUrl || !collection || !category) return;

        // upload to IPFS
        const data = JSON.stringify({ name, description, image: fileUrl, category, collection });
        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`;
            // run a function to createSales and passes the url
            createSale(url);

        } catch (error) {
            console.log("Error upload : ", error);
        }
    }

    // createSale
    async function createSale(url) {
        // create items and list them on the marketplace
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection); // --> hook up to metamask
        const signer = provider.getSigner(); // --> get Signer

        // create token
        let contract = new ethers.Contract(nftAddress, NFT.abi, signer);
        let transaction = await contract.mintToken(url);
        let tx = await transaction.wait();
        console.log({tx})
        // let event = tx.events[0];
        // let value = event.args[2]; // --> get the value from event args
        //let tokenId = value.toNumber();
        let tokenId = 1;
        const price = ethers.utils.parseUnits(formInput.price, "ether")

        //  list item for sale on the marketplace:
        contract = new ethers.Contract(nftMarketAddress, Market.abi, signer);
        let listingPrice = await contract.getListingPrice();
        listingPrice = listingPrice.toString();

        transaction = await contract.makeMarketItem(nftAddress, tokenId, price, { value: listingPrice });
        await transaction.wait();

        // redirect to homepage
        router.push("./");


    }


    return (
        <>
        <Header/>
        <div className="field1">

        <section className="section1">
            <div className="add-nft">
                <h1>create new item </h1>


            </div>
            
            <div className="require">
                <p><span>*</span>Required fields</p>
            </div>

            <div className="uploadd">
                <div id="uploadArea" className="upload-area">
                  
                    <div className="upload-area__header">
                        <h1 className="upload-area__title">Upload your file</h1>
                        <p className="upload-area__paragraph">
                            File should be an image
                            
                        </p>
                    </div>     
                  
                </div>
                <Add fileUrl={fileUrl} setFileUrl={setFileUrl} changeImage={changeImage} />

            </div>
            <div className="personal-info">
                <div className="name">
                    <p>Name</p>
                </div>
                <div className="input-field">
                    <input type="text" id="lname" className="input-text" name="name" onChange={change} placeholder="item name "/>
                </div>
                <div className="name">
                    <p>Collection</p>
                </div>
                <div className="input-field">
                    <input type="text" id="collection" className="input-text" onChange={change} name="collection" placeholder="item collection"/>
                </div>
                <div className="name">
                    <p>Description</p>
                </div>
                <div className="input-field">
                    <textarea name="description" onChange={change} placeholder="provide a detailed description of your item "></textarea>
                </div>

                <div className="name">
                    <p>category</p>
                </div>
                <div className="select">
                    <select name="category" onChange={change}>
                      <option className="opti" value="Art">Art</option>
                      <option className="opti" value="collectibles">collectibles</option>
                      <option className="opti" value="photography">photography</option>
                      <option className="opti" value="trading_cards">trading cards</option>
                      <option className="opti" value="virtual_words">virtual words</option>
                    
                    </select>
                </div>
                <div className="name">
                    <p>Price</p>
                </div>
                <div className="input-field">
                    <input type="text" id="price" className="input-text" name="price" onChange={change} placeholder="item price"/>
                </div>







            </div>
            <div className="SUBMIT">
            <button type="button" className="btn btn-primary" onClick={createMarket} style={{background:"#5d2579"}}>Create</button>
            </div>  








        </section>
    </div>
    <Footer/>

        </>

    )
}

        // :)

export default Create