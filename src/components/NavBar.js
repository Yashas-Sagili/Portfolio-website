import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
    BrowserRouter as Router
} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/logo.svg';
import navicon1 from '../assets/nav-icon1.svg';
import navicon2 from '../assets/nav-icon2.svg';
import navicon3 from '../assets/nav-icon3.svg';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return() => window.removeEventListener("scroll", onScroll);
}, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="lg" className= {scrolled? "scrolled": ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src = {logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/Yashas-Sagili/"><img src={navicon1} alt="LinkedIn account link" /></a>
                                <a href="https://github.com/Yashas-Sagili/"><img src={navicon2} alt="GitHub account link" /></a>
                                <a href="https://www.instagram.com/yashas_s_994?igsh=eGk2eWw2aXpxcHhz"><img src={navicon3} alt="Instagram account link" /></a>
                            </div>
                            <HashLink to={'#connect'}>
                                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    )
}
