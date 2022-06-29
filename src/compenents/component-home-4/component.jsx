import React from "react";
import avatar from '../../assets/avatar/cryptopunk1483.png';
import "./component.css"


const comp4 =()=>{
    return (
        <div className="container3">
            <div className="info-user">
                <div className="avatar-image">
                    <img src={avatar} />
                 </div>
                <div className="user">
                    <ul>
                        <li className="user-name">
                                anas fresco
                        </li>
                        <li className="user-gain">
                            5.87 ETH

                        </li>
                    </ul>

                </div>
            </div>



        </div>

    );
};

export default comp4;
