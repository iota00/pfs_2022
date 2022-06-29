import React from 'react'
import Footer from '../compenents/Footer/Footer';
import Header from '../compenents/Header/Header';
import Component1 from '../compenents/component-home-1/component'
import Component2 from '../compenents/component-home-2/component'
import "./Home.css"
import Component3 from '../compenents/component-home-3/component'
import Component4 from '../compenents/component-home-4/component'
import Component5 from '../compenents/component-home-5/component'


const HOME = () => {
    return ( 
        <>
    <Header/>
   
    <div class="main-container">
    
    <div className="main1">
            <section  className="Section1">
            <Component1/>
            <Component2/>


            </section>
    </div>
    <div className="main2">
            <section className="section2">
                <div className="live-auction">
                    <h1>live auction
                    </h1>
                    <p>Explore more</p>
                </div>
            </section>
            <div className="container1">
                
                <Component3/>
                <Component3/>
                <Component3/>
                <Component3/>
                <Component3/>
                <Component3/>

            </div>
    </div>
    <div class="main3">
        <section class="section3">
                <div class="top-seller">
                    
                    <h1>Top seller</h1>
                </div>
                <div class="section-user">
                        <div class="card-seller">

                        <Component4/>
                        <Component4/>
                        <Component4/>
                        <Component4/>
                        <Component4/>
                        <Component4/>
                        <Component4/>
                        <Component4/>
                        

                        </div>
                </div>

                
        </section>
    </div>
    <div class="main2">
            <section class="section2">
                <div class="live-auction">
                    <h1>Trending
                    </h1>

                </div>

                <div class="container1">
                    <Component3/>
                    <Component3/>
                    <Component3/>

                </div>
                </section>
                </div>
            <div className="main4">
                <section className="section4">
                    <div className="live-auction">

                    <h1>Create and sell your NFTs
                        </h1>

                    </div>
                <Component5/>
        
                </section>
            </div>
    
    
    </div>
    <div>
        <Footer/>
    </div>
    </>
    )
}
export default HOME;