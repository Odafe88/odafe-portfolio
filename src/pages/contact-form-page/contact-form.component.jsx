import React, { useState, useRef } from "react";
import './contact-form.styles.scss';

import emailjs from 'emailjs-com';
import FormInput from "../../component/form-input/form-input.component";
import CustomButton from "../../component/custom-button/custom-button.component";
import TextArea from "../../component/text-area/text-area.component";


const ContactForm = () => {

    const [values, setValues] = useState({
        fullName: '',
        email: '',
        message: ''
    })

    const form = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        emailjs.sendForm('service_dhubbwv', 'template_bmdeqqk', form.current, 'user_sm2NSaW1gtS4A1Sx4iNnB')
            .then(result => {
                console.log(result.text)
            }, error => {
                console.error(error.text)
            });
        event.target.reset();
    }

    const handleChange = (e) => {
        setValues(
            values => ({
                ...values,
                [e.target.name]: e.target.values
            })
        )
    }

    return (
        <div className="contact-form">
            <h2>You can Send me an email</h2>
            <form className="form" ref={form} onSubmit={handleSubmit}>
                <FormInput type='text' handleChange={handleChange} name='user_name' label='FullName' />
                <FormInput type='email' handleChange={handleChange} name='user_email' label='Email' />
                <TextArea name="message" handleChange={handleChange} label='Your message' />
                <div className="btn">
                    <CustomButton type="submit">Submit</CustomButton>
                </div>

            </form>
        </div>
    )

}


export default ContactForm;