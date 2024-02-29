import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myImg.jpg";
import Tilt from "react-parallax-tilt";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{backgroundColor:"#1b1a2ea9"}}>
    <Container >
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
           I'm so interested to choose this profession as a web developer.
           And always looking for ways to improve my skills and learn new technologies.
            <br />
            <br />I'm confident of my skills in
            <i>
              <b className="purple"> HTML,CSS,Javascript,Mongo DB,React </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            
              <b className="purple">Web Technologies and Products </b> and
              interested to do my profession in these fields.
             
           
            <br />
            <br />
            I'm looking for oppurtunities to get improve as 
             <b className="purple ms-1">Full Stack Developer</b> and
            
              <p className="white">
                {" "}
                to get more expirienced.
              </p>
            
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/ashikjoseph"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/AKallarakkal97"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ashik-joseph-k-j-550aa4251/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
               <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ashikkallarakkal17/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
               <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default Home2