import React from "react";
import { Link } from 'react-router-dom';

import crypto from '../../assets/proj_imgs/crypto_app.png'
import blog from '../../assets/proj_imgs/blog_snip.png'
import crwn from '../../assets/proj_imgs/crwn.png'

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

        },
        {
            name: "e-Commerce site",
            url: "http://crwn-clothing-odafe88.vercel.app/",
            imgUrl: crwn,
            excerpt: "A ficticious e-commerce site for a clothing brand built with ReactJs and styled-components, uses firebase for user authentication, flutterwave for prcessing payments and redux for state management.",
            slug: "crown-clothing"

        },
    ]


    return (
        <div className="project-page">
            <div className="project-header">
                <h3>
                    Notable projects
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
                                <button className="project-button"><a href={project.url} target="_blank" rel="noreferrer">VISIT PAGE</a></button>
                            </div>

                        )
                    })
                }

            </div>
        </div>
    )
}

export default ProJectPage;