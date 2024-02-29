import React from 'react'
import homeLogo from "../../Assets/home-main.svg"
import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Home3 from './Home3';


function Home() {
  return (
    <section>
    <Container fluid className="home-section" id="home">    
      <Container className="home-content">
        <Row>
          <Col md={7} className="home-header">
            <h1 style={{ paddingBottom: 15 }} className="heading">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="heading-name">
              I'M
              <strong className="main-name"> ASHIK JOSEPH</strong>
            </h1>

            <div style={{ padding: 50, textAlign: "left" }}>
              <Home3/>
            </div>
          </Col>

          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    <Home2 />
  </section>

  )
}

export default Home