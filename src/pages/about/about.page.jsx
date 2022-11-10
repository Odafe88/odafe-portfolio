import React from "react";
import { Zoom } from "react-reveal";


import './about.styles.scss';



const About = () => {

    const skills = [
        "HTML", "CSS", "JavaScript", "SCSS", "React", "Next.js", "Styled-Components", "Tailwindcss",
        "GIT", "Typescript", "Firebase"
    ]

    return (
        <div id="about" className="about-container">
            <div className="about-body">
                <div className="about-header">
                    <h2>About</h2>
                </div>
                <div className="about-body-text">
                    <p>
                        I'm a Frontend web developer from Lagos, Nigeria. I use some of the most efficient tools available to design and build quality websites and web apps.
                    </p>
                    <p>
                        I'm genuinely motivated by my desire to build websites that are not only beautiful, but functional as well.
                    </p>
                </div>
            </div>
            <div className="blob_container_1">

            </div>
            <div className="blob_container_2">

            </div>
            <div className="about-footer">
                <h2>Some of my Technical skills include:</h2>

                {/* <div className="about-skills">
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
                    </div> */}
                <div className="about-footer-text">
                    <div className="skills-box">
                        <ul className="skills-list">
                            {
                                skills.map((skill) => {
                                    return (

                                        <li className="skill-item">{skill}</li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;