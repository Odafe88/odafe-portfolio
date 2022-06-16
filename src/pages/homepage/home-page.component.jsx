import React from 'react';
import { Link } from 'react-router-dom'
import './home-page.styles.scss'
import { Zoom } from 'react-reveal';
import CustomButton from '../../component/custom-button/custom-button.component';



const HomePage = () => {

    return (
        <div className='homepage-body'>
            <div className='homepage-container'>

                <div className='home-page'>
                    <h1 className='intro-fofm' >
                        <span className="intro-fofm-hi">Hi &#128075;,</span><br></br>I'm <span className="intro-fofm-name">Odafe</span>
                    </h1>
                    <p className="homepage-aly" >
                        A frontend developer.
                    </p>
                    <p className="homepage-aly-2">
                        I design and develop websites for businesses and agencies to help increase their reach.
                    </p>
                    <Link className="link-button" to="/contact-email">
                        <button className="custom-button">
                            Contact me
                        </button>
                    </Link>


                </div>

            </div>
        </div>


    )
}

export default HomePage;