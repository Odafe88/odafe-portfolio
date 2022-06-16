import { BiArrowBack } from "react-icons/bi";
import { BsLinkedin, BsWhatsapp, BsGithub, BsTwitter } from "react-icons/bs"

import { Link } from "react-router-dom";

import './contact-page.styles.scss';
import ContactForm from "../contact-form-page/contact-form.component"






const ContactPage = () => (
    <div className='contact-container'>
        <div className="home-back">
            <Link to="/" className="link-button">
                <BiArrowBack />
            </Link>
        </div>
        <div className="contact-header">
            <h1>
                Lets talk.
            </h1>
        </div>
        <div>
            <ContactForm />
        </div>
        <div className="contact-about">
            <h2 className="my-about-header">
                You can also reach me on any of the platforms below
            </h2>
            <div className="icon-container">
                <a className="handles" href="https://wa.me/qr/66OA64ZVXSYBB1" ><BsWhatsapp className="icon" /></a>
                <a className="handles" href="https://github.com/Odafe88"><BsGithub className="icon" /></a>
                <a className="handles" href="https://twitter.com/odafetoearth"><BsTwitter className="icon" /></a>
                <a className="handles" href="https://linkedin.com/in/alaiya-odafe-598115203"><BsLinkedin className="icon" /></a>

            </div>
        </div>
    </div>
)

export default ContactPage