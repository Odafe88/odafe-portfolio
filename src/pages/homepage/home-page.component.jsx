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
                    <p className='intro-fofm' >Hi I'm</p>
                    <ul className="c-rainbow">
                        <li className="c-rainbow__layer c-rainbow__layer--white">Odafe</li>
                        <li className="c-rainbow__layer c-rainbow__layer--orange">Odafe</li>
                        <li className="c-rainbow__layer c-rainbow__layer--red">Odafe</li>
                        <li className="c-rainbow__layer c-rainbow__layer--violet">Odafe</li>
                        <li className="c-rainbow__layer c-rainbow__layer--blue">Odafe</li>
                        <li className="c-rainbow__layer c-rainbow__layer--green">Odafe</li>
                        <li className="c-rainbow__layer c-rainbow__layer--yellow">Odafe</li>
                    </ul>
                    <div className="span-cover">
                        <span className='intro-span'>A web developer</span>
                    </div>
                </div>
                <div className="hero-section">
                    <div className="section-header">
                        <h1>
                            You want to know more?
                        </h1>
                        <Link to="/about" className='link-button'>
                            click here
                        </Link>
                    </div>
                </div>
            </div>

            {/* <Zoom>
                <Link to="/about" className='link-button'>
                    <CustomButton className='custom-button'>
                        More about me
                    </CustomButton>
                </Link>
            </Zoom> */}


        </div>


    )
}

export default HomePage;