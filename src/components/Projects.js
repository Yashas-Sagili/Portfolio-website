import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorsSharp2 from "../assets/colorsSharp2.png";
import projImg1 from "../assets/projImg1.png";
import projImg2 from "../assets/projImg2.png";
import projImg3 from "../assets/projImg3.png";
import projImg4 from "../assets/projImg4.png";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
    const projects = [
        {
            title: "QNexus",
            description: "QNexus is a gamified educational platform designed to blend fun and learning into a seamless experience.",
            imgUrl: projImg1,
            //githubUrl: "https://github.com/Yashas-Sagili/QNexus",
        },
        {
            title: "Heart Failure Predictor",
            description: "An ML model to predict the percentage chance of failure of a patient's heart with certain given readings.",
            imgUrl: projImg2,
            //githubUrl: "https://github.com/Yashas-Sagili/",
        },
        {
            title: "Mobile Shopee",
            description: "A one-stop shop solution for all purchases related to mobile phones.",
            imgUrl: projImg3,
            //githubUrl: "https://github.com/Yashas-Sagili/",
        },
        {
            title: "Portfolio Website",
            description: "A single website that showcases everything required to assess my skills.",
            imgUrl: projImg4,
            //githubUrl: "https://github.com/Yashas-Sagili/Portfolio-website",
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Projects</h2>
                                <p>Following are some of the projects I have worked on, both individually and in teams.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        {/*<Nav.Item>
                                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>*/}
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp": ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    projects.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                            key={index}
                                                            title={project.title}
                                                            description={project.description}
                                                            imgUrl={project.imgUrl}
                                                            //githubUrl={project.githubUrl}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        {/*<Tab.Pane eventKey="second">
                                            <p>Lorem Ipsum</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>Lorem Ipsum</p>
                                        </Tab.Pane>*/}
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsSharp2} alt="background-img"></img>
        </section>
    )
}