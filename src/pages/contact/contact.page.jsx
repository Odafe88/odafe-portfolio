import React, { useRef } from "react";

import { Link } from "react-router-dom";

import './contact-page.styles.scss';


import { ReactComponent as Whatsapp } from '../../assets/whatsapp.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';




const ContactPage = () => (
    <div className='contact-container'>
        <div className="contact-header">
            <h2 className="contact-header-text">Contact me lets build something fantastic!</h2>

        </div>


        <div className="contact-about">
            <h2 className="my-about-header">
                Hi again &#128075;
            </h2>
            <p className="my-about-text">
                I'm seeking new oppurtunities to collaborate with companies/individuals/cooperations, not just to work for them but to bring my collective skills to the table in order to solve real world problem and also add to my experience and knowledge
            </p>
            <h3 className="my-about-text">
                Your can contact me on any of my handles below
            </h3>
            <div className="icon-container">
                <a href="https://wa.me/qr/66OA64ZVXSYBB1"><span className="handles"><Whatsapp /></span></a>
                <a href="https://github.com/Odafe88"><span className="handles"><Github /></span></a>
                <a href="https://twitter.com/odafetoearth"><span className="handles"><Twitter /></span></a>
                <a href="https://linkedin.com/in/alaiya-odafe-598115203"><span className="handles"><LinkedIn /></span></a>
            </div>
            <div className="hero-section">
                <div className="section-header">
                    <h1>
                        Or send me an email
                    </h1>
                    <Link to='/contact-email' className='link-button'>
                        Lets go!
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default ContactPage