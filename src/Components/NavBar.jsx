import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Logo from '../img/logo.svg';
import navIcon1 from '../img/nav-icon1.svg';
import navIcon2 from '../img/nav-icon2.svg';
import navIcon3 from '../img/nav-icon3.svg';

function NavBar() {

    let [activeLink, setActiveLink] = useState('home');

    function onUpdateActiveLink(value) {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar expand="lg" >
                <Container className=''>
                    <Navbar.Brand href="#home" className='logo'>
                        <img src={Logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="mx-auto">
                            <Nav.Link onClick={() => onUpdateActiveLink('home')} className={activeLink === 'home' ? 'active nav_link' : 'nav_link'} href="">Home</Nav.Link>
                            <Nav.Link onClick={() => onUpdateActiveLink('skills')} className={activeLink === 'skills' ? 'active nav_link' : 'nav_link'} href="">Skills</Nav.Link>
                            <Nav.Link onClick={() => onUpdateActiveLink('projects')} className={activeLink === 'projects' ? 'active nav_link' : 'nav_link'} href="">Projects</Nav.Link>
                        </Nav>

                        <span className=' d-sm-flex justify-content-sm-center text-sm-center'>
                            <div className="social-icon">
                                <a href="/">  <img src={navIcon1} className='social_img' alt="img" /> </a>
                                <a href="/">  <img src={navIcon2} className='social_img' alt="img" /> </a>
                                <a href="/">  <img src={navIcon3} className='social_img' alt="img" /> </a>
                            </div>
                        </span>
                        <div className="navbar-text d-sm-flex justify-content-sm-center text-sm-center">
                            <button type='text' className='btn_connect' onClick={() => console.log('connect')}>
                                <span>Let's Connect</span>
                            </button>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
