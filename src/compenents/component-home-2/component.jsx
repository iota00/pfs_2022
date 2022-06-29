import React from 'react';
import "./component.css";
import avatar from '../../assets/avatar/cryptopunk1483.png';
import nft from '../../assets/nfts/gif.gif';

import {BiTimeFive} from 'react-icons/bi'
import { FaEthereum} from 'react-icons/fa';


const comp2 = () => {
    return (
        <div>
                    <ul className="cards">
                        <li>
                            <a href="/description" className="card">
                                <img src={nft} className="card__image" alt="" />
                                <div className="card__overlay">
                                    <div className="card__header">
                                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                                        <img className="card__thumb" src={avatar} alt="" />
                                        <div className="card__header-text">
                                            <ul>

                                                <li className="card__title">Red Lite District #138/210</li>
                                                    <li className="card__title">9.99<FaEthereum/></li>

                                            </ul>

                                            <span className="card__status">anas fresco</span>
                                        </div>
                                    </div>
                                    <p className="card__description"><span><BiTimeFive/></span> schedule Sale ends November 8, 2022 at 6:12am GMT+1 </p>
                                </div>
                            </a>
                            </li>

                    </ul>
                </div>

    );
};
export default comp2;