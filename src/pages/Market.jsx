import React, { useEffect, useState } from 'react'
import './Market.css'
import Footer from '../compenents/Footer/Footer';
import Header from '../compenents/Header/Header';
import Component1 from '../compenents/component-market-1/component'
import Component2 from '../compenents/component-home-3/component'
import "../assets/FONTS/fonts.css"

/* Blockchain stuffs: */

import { ethers } from "ethers"
import axios from "axios"
import Web3Modal from "web3modal"

// import icons
import {FaEthereum, FaUser} from "react-icons/fa"
// import addresses

import {
  nftMarketAddress,
  nftAddress,

} from "../config"

// import contract's artifacts

import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../artifacts/contracts/Market.sol/Market.json";


const Market = () => {

    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
         loadNfts();
      }, [])

      //  load nfts from blockchain :
      const loadNfts = async () => {
        /** What we want to load
         * provider, tokenContract, marketContract, data, for our marketItems
         */
        // using JSON-RPC-Provider
        const provider = new ethers.providers.JsonRpcProvider();

        const tokenContract = new ethers.Contract(nftAddress, NFT.abi, provider);
        const marketContract = new ethers.Contract(nftMarketAddress, NFTMarket.abi, provider);
        console.log({ marketContract });
        const data = await marketContract.fetchMarketTokens();
        // get items out from the data
        const items = await Promise.all(data.map(async i => {
          const tokenUri = await tokenContract.tokenURI(i.tokenId);
          // we want to get the metadata - json
          const meta = await axios.get(tokenUri);
          let price = ethers.utils.formatUnits(i.price.toString(), 'ether');
          // create item object
          let item = {
            price,
            tokenId: i.tokenId.toNumber(),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
          }

          return item;
        }))

        setNfts([]);
        //  set the NFTs
        setNfts(items);
        setLoading(true);
      }

      // function to buy nfts for market
      async function buyNFT(e,nft) {
        e.stopPropagation();
        console.log("Calling Buy.....");
        const web3modal = new Web3Modal();
        //  connect to metamask or whatever wallet we're using on the marketplace
        const connection = await web3modal.connect();
        // provider
        const provider = new ethers.providers.Web3Provider(connection);
        // get Signer --> pass it to the contract information, here we wanna see the signer
        const signer = provider.getSigner();
        const contract = new ethers.Contract(nftMarketAddress, NFTMarket.abi, signer);

        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');

        const transaction = await contract.createMarketSale(nftAddress, nft.tokenId, {
          value: price
        });
        // const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
        //   value: price
        // });
        console.log({ transaction })
        // wait for the transaction to happend
        await transaction.wait();

        //  refresh nfts data -
        loadNfts();


      }


      console.log({ loading, nfts })


    return ( 
        <>
        <Header/>
        <div className="main">
        <section className="section10">
            <div className='SELECT'>
            <Component1/>
            </div>
            <div className="container1">

                {
                    loading && !nfts.length 
                    ? 
                    <h1> No Nfts in the marketplace </h1>
                    :
                    nfts.map((item, index) => 
                        (
                            <Component2/>
                        )
                    )
                }

            </div>
        </section>
        </div>  
        <Footer/>
        

        </>
    )
};



export default Market;