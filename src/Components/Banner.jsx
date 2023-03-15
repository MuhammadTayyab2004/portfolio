import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import HeaderImg from "../img/header-img.svg";

function Banner() {



    return (
        <>
            <section id="home" className="banner">
                <Container>
                    <Row>
                        <Col xs={12} md={6} xl={7} className='mt-5'>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Tayyab`} <span className="wrap" contentEditable=''></span> </h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In magnam, deleniti aspernatur, tempore iure suscipit dolor numquam, quia nihil facere natus vero distinctio quo modi eligendi cumque ipsum quaerat quisquam?</p>
                            <button onClick={() => console.log('connect')} className='btn'>Let's connect <ArrowRightCircle size={25} /> </button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={HeaderImg} alt="header_img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner;
