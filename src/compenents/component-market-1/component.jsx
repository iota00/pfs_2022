import React from "react";
import "./component.css";
import "../../assets/FONTS/fonts.css"




const  comp1=()=>{
    
    
    return(
            <div className="option-nft">
                <div className="select1">
                <div className="select">
                    <select>
                      <option className="opti" value="1">All categories</option>
                      <option className="opti" value="2">Art</option>
                      <option className="opti" value="1">Virtual World</option>
                      <option className="opti" value="2">Trending Cards</option>
                    
                    </select>
                </div>
                <div className="select">
                <select>
                      <option className="opti" value="1">All Items</option>
                      <option className="opti" value="2">Single item</option>
                      <option className="opti" value="1">BMW</option>
                      <option className="opti" value="2">Bundle</option>
                      
                      

                    
                    </select>
                </div>

                </div>
                <div className="select">
                <select>
                      <option className="opti" value="1">Sort By</option>
                      <option className="opti" value="2">Hight Rate</option>
                      <option className="opti" value="1">Mid Rate</option>
                      <option className="opti" value="2">Low Rate</option>

                    
                    </select>
                </div>


            </div>

                  
                
              
                


      
        
        
            
    );

};

export default comp1;