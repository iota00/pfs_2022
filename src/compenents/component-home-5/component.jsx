import React from "react";
import "./component.css"
import {FaWallet} from 'react-icons/fa'
import {BsFillLayersFill,BsFillImageFill} from "react-icons/bs"
import {AiFillTags} from "react-icons/ai"


const comp5 =()=>{
    return(

        <div className="cards_final">

                  
                    <div className="row1-container">
                        <div className="box box-down purple">
                            <h2>Set up your wallet</h2>
                            <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. </p>
                            <i><FaWallet className="final-icone"/></i>
                        </div>


                        <div className="box purple">
                            <h2>Create your collection</h2>
                            <p>Click My Collections and set up your collection. Add social links, a description, profile and banner images, and set a secondary sales fee.</p>
                            <i><BsFillLayersFill className="final-icone"/></i>
                        </div>

                        <div className="box box-down purple">
                            <h2>Add your NFTs</h2>
                            <p>Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
                            <i><BsFillImageFill className="final-icone"/></i>
                        </div>
                    </div>
                    <div className="row2-container">
                        <div className="box purple">
                            <h2>List them for sale</h2>
                            <p>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!</p>
                           <i> <AiFillTags className="final-icone"/></i>
                        </div>
                    </div>
                </div>
    );
};
export default comp5;
