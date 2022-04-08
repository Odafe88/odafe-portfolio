import React from "react";
import { Link } from 'react-router-dom';
import { Zoom } from "react-reveal";


import './about.styles.scss';
import { ReactComponent as Man } from '../../assets/planet.svg'
import { ReactComponent as Html } from '../../assets/html.svg'
import { ReactComponent as Css } from '../../assets/css.svg'
import { ReactComponent as Js } from '../../assets/javascript.svg'
import { ReactComponent as Bootstrap } from '../../assets/bootstrap.svg'
import { ReactComponent as Rect } from '../../assets/react.svg'
import { ReactComponent as Base } from '../../assets/firebase.svg'
import { ReactComponent as Next } from '../../assets/nextjs.svg'
import { ReactComponent as Type } from '../../assets/typescript.svg'



const About = () => (
    <div className="about-container">
        <div className="about-header">
            <h2 className="about-header-title">About</h2>
            <div className="hero-section">
                <div className="section-header">
                    <h1>
                        "The more you know the less ignorant you become."
                    </h1>
                    <Link to="/about" className='link-button'>
                        - Mr Chuckles
                    </Link>
                </div>
            </div>
        </div>
        <div className="about-body">
            <Zoom>
                <div className="about-body-text">
                    <p>
                        My name is Odafe Alaiya (Pronounced `Audafe`), a Frontend web developer from Lagos, Nigeria. I use some of the most efficient tools available to design and build quality websites and web apps.
                    </p>
                    <p>
                        I'm genuinely motivated by my desire to build websites that are not only beautiful, but functional as well.
                    </p>
                </div>
            </Zoom>
        </div>
        <div className="about-footer">
            <Zoom>
                <h2>Some of my Technical skills include</h2>
            </Zoom>
            <Zoom>
                <div className="about-skills">
                    <span className="skill">
                        <Html />
                    </span>
                    <span className="skill">
                        <Css />
                    </span>
                    <span className="skill">
                        <Js />
                    </span>
                    <span className="skill">
                        <Bootstrap />
                    </span>
                    <span className="skill">
                        <Rect />
                    </span>
                    <span className="skill">
                        <Base />
                    </span>
                    <span className="skill">
                        <Type />
                    </span>
                </div>
                <div className="about-footer-text">
                    <h3>
                        Some others Include
                    </h3>
                    <div>
                        <p>
                            Styled-Components, Tailwindcss, GraphQl and GraphCMS, Firebase, NextJs, Redux(for state management)

                        </p>
                    </div>
                </div>
            </Zoom>
            <Link to="/projects" className="link-button">
                <div className="custom-button">
                    Works
                </div>
            </Link>
        </div>
    </div>
)


export default About;