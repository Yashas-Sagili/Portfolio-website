import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import probar40 from "../assets/probar40.png";
import probar50 from "../assets/probar50.png";
import probar60 from "../assets/probar60.png";
import probar80 from "../assets/probar80.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max:4000, min:3000 },
            items: 5
        },

        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },

        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },

        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }

    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>The following are my skills with the percentage bars indicating<br/> my percieved proficiency in the respective subject-matter</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={probar40} alt="Progress Bar" />
                                    <h5><a href="https://www.github.com/Yashas-Sagili/">Web Development</a></h5>
                                </div>
                                <div className="item">
                                    <img src={probar60} alt="Progress Bar" />
                                    <h5><a href="https://www.github.com/Yashas-Sagili/">Web Designing</a></h5>
                                </div>
                                <div className="item">
                                    <img src={probar80} alt="Progress Bar" />
                                    <h5><a href="https://www.github.com/Yashas-Sagili/">Machine Learning</a></h5>
                                </div>
                                <div className="item">
                                    <img src={probar50} alt="Progress Bar" />
                                    <h5><a href="https://www.github.com/Yashas-Sagili/">Deep Learning</a></h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}