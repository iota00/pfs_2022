import React from 'react'
import "./Footer.css"
import "../../assets/FONTS/fonts.css";
import {AiOutlineWhatsApp,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {FiFacebook} from "react-icons/fi"


export const Footer = () => {
    return ( 
        <footer className="footer-distributed">

        <div className="footer-left">

            <h3>ENSA<span>NFT</span></h3>

            <p className="footer-links">
                <a href="#" className="link-1">Home</a>

                <a href="#">Market</a>

                <a href="#">Contact</a>

                <a href="#">Create</a>


            </p>

            <p className="footer-company-name">ENSA MARRAKECH 2022</p>
        </div>

        <div className="footer-center">

            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>
                BP 575 Bd Abdelkrim Al Khattabi, Guélize</span>40000 Copier l'adress</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+212698102160</p>
            </div>

            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXLDRqnhSvFMRpLgSlwzLTSZrMXzMhnJVNssjrNHHTwlQbQjSsdNRdMKSCHZCVdqHSLbf">anasbahi2015@gmail.com</a></p>
            </div>

        </div>

        <div className="footer-right">

            <p className="footer-company-about">
                <span>About the company</span>The National School of Applied Sciences of Marrakech is a Moroccan engineering school located in Marrakech. It was created in 2000 by the Ministry of Higher Education, Executive Training and Scientific
                Research and is a component of Cadi Ayyad University.
            </p>

            <div className="footer-icons">

                <a href="#">
                    <AiOutlineWhatsApp color='white'/>
                </a>
                <a href="#"><AiFillLinkedin color='white'/></a>
                <a href="#"><AiFillGithub color='white'/></a>
                <a href="#"><FiFacebook color='white'/></a>

            </div>

        </div>

    </footer>


)
}
export default Footer;