import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Work from "../components/Work";

import "../styles/pages/ContactMe.css";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import Phone from "../components/Phone";
import Email from "../components/Email";

export default function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, {
            publicKey: "8-2Cw9NBSBiVA9ON5",
        }).then(() => {
            console.log("Email Sent.");
        }, (error) => {
            console.log("Error:", error);
        });
    };

    return (
    <>
        <Navbar active="contact" />
        <Banner 
            src='/images/banners/contact.png'
            title='Contact Me'
        />
        <main>
            <div className='section outer'>
                <h1 className='main__title'>Want to Talk?</h1>
                <h4 className='main__sub'>Feel free to email me with questions and requests!</h4>
                <div className='contact-me'>
                    <div className='contact-me__form'>
                        <h2>Email Me</h2>
                        <form ref={form} onSubmit={sendEmail} className="form">
                          <label className="form__lable">Name</label>
                          <input className="form__input-bar" type="text" name="user_name" required />
                          <label className="form__lable">Email</label>
                          <input className="form__input-bar" type="email" name="user_email" required />
                          <label className="form__lable">Message</label>
                          <textarea className="form__text" name="message" required/>
                          <input className="form__button" type="submit" value="Send me a message" />
                        </form>
                    </div>
                    <div className='contact-me__info'>
                        <h2>Personal Information</h2>
                        <li>Artur Salek (He/Him)</li>
                        <li>23 years old</li>
                        <li><Phone /></li>
                        <li><Email /></li>
                    </div>
                </div>
            </div>
            <hr />
            <div className='section outer'>
                <h1 className='main__title'>Links</h1>
                <h4 className="main__sub">Various links and websites where you can find me or my work.</h4>
                <a href="https://hartoehajek.itch.io" target="blank" className='no-decoration'>
                    <Work
                        title="Itch.io page"
                        job="Games"
                        desc="https://hartoehajek.itch.io"
                    />
                </a>
                <a href="https://worldofarchon.com/" target="blank" className='no-decoration'>
                    <Work
                        title="World of Archon"
                        job="D&D and Worldbuilding"
                        desc="https://worldofarchon.com/"
                    />
                </a>
                <a href="https://www.linkedin.com/in/artur-salek-a678251b7/" target="blank" className='no-decoration'>
                    <Work
                        title="LinkedIn"
                        job="Social Media"
                        desc="https://www.linkedin.com/in/artur-salek-a678251b7/"
                    />
                </a>
            </div>
        </main>
        <Footer />         
    </>
    );
}