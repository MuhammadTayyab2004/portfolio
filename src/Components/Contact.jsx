import React from "react";
import { Container } from "react-bootstrap";



import ContactImg from "../img/contact-img.svg";

function Contact() {



    return (
        <>
            <section id="home" className="contact_banner">
                <Container>
                    <div className="row ">

                        <div className="col-lg-5 col-md-12 mt-5 pt-5">
                            <img src={ContactImg} alt="Contact_img" />
                        </div>

                        <div className="col-lg-7 col-md-12 ">
                            <h1>Get In Touch</h1>
                            <form class="contact-form">
                                <div class="form-name">
                                    <input type="text" name="First Name" placeholder="First Name" />
                                    <input type="text" name="Last Name" placeholder="Last Name" />
                                </div>
                                <div class="form-name">
                                    <input type="email" name="Email Address" placeholder="Email Address" />
                                    <input type="email" name="Phone No" placeholder="Phone No." />
                                </div>
                                <textarea name="Message" rows="7" placeholder="Message" ></textarea>
                                <button type="submit" class="btn btn_contact"> Send Message</button>

                            </form>
                        </div>

                    </div>

                </Container>
            </section>

        </>
    )
}

export default Contact;




