import React from 'react'
import './description.css'
import Footer from '../compenents/Footer/Footer';
import Header from '../compenents/Header/Header';
import Image from  "../compenents/component-description/image"
import "../assets/FONTS/fonts.css"
import Description from  "../compenents/component-description/description"
import Collection from "../compenents/component-description/collection"
import Price from "../compenents/component-description/price"
import Det from "../compenents/component-description/details"
import Card from "../compenents/component-home-3/component"










const des = () => {
    return ( 
        <>
        <Header/>
        <div className="main12">
        <section className="section14">
            <div className="all">
                <div className="container17">
                <Image/>
                <Description/>
                </div>
                <div className="container5">
                <Collection/>
                <Price/>
                <Det/>
                    </div>
                

        


            </div>
            <div class="main2">
                <section class="section2">
                    <div class="live-auction">
                        <h1>More from this collection
                        </h1>

                    </div>

                    <div class="container1">
                        <Card/>
                        <Card/>
                        <Card/>
                        



                    </div>

            
                </section>
            </div>
            </section>

            </div>
            <Footer/>
        
        
        </>
    )
};



export default des;