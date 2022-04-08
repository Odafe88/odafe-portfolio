import React from "react";
import { Link } from 'react-router-dom';

import crypto from '../../assets/proj_imgs/crypto_app.png'
import blog from '../../assets/proj_imgs/blog_snip.png'

import "./project.styles.scss"



const ProJectPage = () => {

    const projects = [
        {
            name: "Crypto Tracker",
            url: "http://crypto-app-gilt.vercel.app/",
            imgUrl: crypto,
            excerpt: "A Crypto price tracker built with nextJs that utilizes a crypto API",
            slug: "crypto-tracker"

        },
        {
            name: "Blog App",
            url: "http://graph-blog-weld.vercel.app/",
            imgUrl: blog,
            excerpt: "A Blog app built with NextJs and Tailwindcss utilizing GraphCMS for content management and GraphQL for queries.",
            slug: "blog-app"

        }
    ]


    return (
        <div className="project-page">
            <div className="project-header">
                <h3>
                    Some of my works
                </h3>

            </div>
            <div className="project-container">
                {
                    projects.map((project) => {
                        return (
                            <div className="project-tile">
                                <div className="project-lapo">
                                    <span className="project-span">{project.name}</span>
                                    <div className="project">
                                        <img className="project_img" alt="app" src={project.imgUrl} />
                                    </div>
                                    <p className="project-about">{project.excerpt}</p>
                                </div>
                                <span className="project-button"><a href={project.url} target="_blank" rel="noreferrer">VISIT PAGE</a></span>
                            </div>

                        )
                    })
                }


                <div className="hero-section">
                    <div className="section-header">
                        <h1>
                            "For words without works is but nothing."
                        </h1>
                        <Link to="/about" className='link-button'>
                            - Sir Krabs
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProJectPage;