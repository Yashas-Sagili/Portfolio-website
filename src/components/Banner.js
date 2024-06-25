import 'animate.css';
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen';
import HeaderImg from '../assets/ProgrammerImage.png';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // eslint-disable-next-line no-unused-vars
    const [index, setIndex] = useState(1);
    const toRotate = ["ML engineer", "Web Designer", "Web Developer"];
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome to my portfolio</span>
                                <h1>{`Hi! I'm Yashas Sagili,`}</h1>
                                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='["Web developer", "Web designer", "ML engineer"]'><span className="wrap">{text}</span></span></h1>
                                <p>I'm a Computer Science major with minor specialization in AI and ML. I'm familiar and have worked with many of the Machine Learning and Deep Learning strategies on projects where these concepts were of utmost utility.<br/> I have also done Web Development projects though I'm fairly new to it.</p>
                                <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25} /></button>
                            </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn": ""}>
                                    <img src={HeaderImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}