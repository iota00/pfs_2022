import React from 'react';
import "./component.css";
import "../../assets/FONTS/fonts.css"
import {BsFillCheckCircleFill} from  "react-icons/bs"
import {FaEthereum} from "react-icons/fa"
import {BiTimeFive} from "react-icons/bi"

import {AiFillHeart} from "react-icons/ai"
import nft from '../../assets/nfts/unnamed (1).jpg';
import avatar from '../../assets/avatar/cryptopunk1483.png';


const comp3 = () => {
    return (
        <div className="grid-item">
                        <div className="item-style">
                            <div className="thumb">
                                <a href="/description" className="thumba">
                                    <img src={nft} style={{width:"350px",height:"400px"}}/>
                                </a>
                                <button className="reaction-btn">

                                        <AiFillHeart class="heart-icon"/>
                                <span>69</span>
                                    </button>
                            </div>
                          

                            <div className="content">
                                <h1 className="kind-of-nft">
                                    utility
                                </h1>
                                <h3 className="title">
                                    <a href="#">Name NFT #1</a>
                                </h3>

                                <div className="profile d-flex-center">
                                    <a href="#">
                                        <img src={nft} className="image-avatar" alt=""/>
                                    </a>
                                    <a href="#" className="author-text">
                                    @anasfresco  
                                         </a>
                                    <BsFillCheckCircleFill color="blue"/>
                                </div>
                                

                                <div className="product-owner d-flex-center">
                                    <span className="bid-owner">
                                        PRICE: <strong>(2 / 10)</strong>
                                        </span>
                                    <span className="biding-price d-flex-between">
                                        
                                        99.1 ETH<span><FaEthereum/></span>
                                    </span>
                                </div>



                    
                                <div className="product-buy d-flex-between">
                                    <a href="#" className="btn">
                                        <span>
                                            <BiTimeFive size={30} style={{paddingRight:"9px"}}/>  
                                            
                                        21 hours left
                                        </span>
                                    </a>
                                    <a href="#" className="btn btn-cart btn-outline">
                                        <span>
                                    Buy
                                     </span>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
      
        
            );  
  };
  export default comp3;