import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.svg";
import navIcon1 from "../assets/nav-icon1.svg";
import navIcon2 from "../assets/nav-icon2.svg";
import navIcon3 from "../assets/nav-icon3.svg";

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                    <img src={logo} alt="logo"></img>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/Yashas-Sagili/"><img src={navIcon1} alt="LinkedIn account link" /></a>
                        <a href="https://github.com/Yashas-Sagili/"><img src={navIcon2} alt="GitHub account link" /></a>
                        <a href="https://www.instagram.com/yashas_s_994?igsh=eGk2eWw2aXpxcHhz"><img src={navIcon3} alt="Instagram account link" /></a>
                        </div>
                        <p>{'\u00a9'} 2024, Yashas Sagili. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}