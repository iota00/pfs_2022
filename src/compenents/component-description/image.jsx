import "./image.css"
import {AiFillHeart} from "react-icons/ai"


import nft from '../../assets/nfts/city.jpg';
import "../../assets/FONTS/fonts.css"


const comp =() => {



    return (
        
       
        <div className="grid-item1">
                        <div className="item-style1">
                            <div className="thumb1">
                                <a href="#" className="thumba">
                                    <img src={nft} style={{width:"450px",height:"500px"}}/>
                                </a>
                                <button className="reaction-btn">
                                
                                   <AiFillHeart color="red" />
                            <span>69</span>
                                </button>
                            </div>
                            


                         
                         

                        </div>
                    </div>
                   
        
        
    )



}
export default comp;