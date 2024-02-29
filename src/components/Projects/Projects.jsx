import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import simpleInterest from "../../Assets/simpleInterest.png"
import netflix from "../../Assets/netflix.png"
import counter from "../../Assets/counter.jpg"
import restaurant from "../../Assets/restaurant.jpg"
import ekart from "../../Assets/ekart.jpg"
import mediaPlayer from "../../Assets/mediaPlayer.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects which I have recently worked.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={simpleInterest}
            isBlog={false}
            title="Simple-Interest"
            description="It is used to calculate the simple interest of an amount for a specific number of years."
            ghLink="https://github.com/ashikjoseph/simple-interest.git"
            demoLink="https://tranquil-begonia-9f1559.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={netflix}
            isBlog={false}
            title="Netflix"
            description="It shows the list of different films, movie series and tv shows based on different categories."
            ghLink="https://github.com/ashikjoseph/netflix.git"
            demoLink="https://vermillion-rabanadas-28927e.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={counter}
            isBlog={false}
            title="Counter"
            description="This web project work as a counter application and also provides the options to reset also."
            ghLink="https://github.com/ashikjoseph/counter-redux.git"
            demoLink="https://counter-redux-tau-one.vercel.app/"              
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={restaurant}
            isBlog={false}
            title="Restaurants"
            description="This web project is to show the list of different restaurants which are located in different places and also give details about their menu items and timings."
            ghLink="https://github.com/ashikjoseph/restaurant-redux.git"
            demoLink="https://restaurant-redux-one.vercel.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={ekart}
            isBlog={false}
            title="EKart"
            description="It shows the web page with ecommerce products which listed based on each category.And the options to add to wishlist or cart and remove from wishlist or cart are included in this products."
            ghLink="https://github.com/ashikjoseph/ekart-redux.git"
            demoLink="https://ekart-redux-delta.vercel.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={mediaPlayer}
            isBlog={false}
            title="Media player"
            description="Mediaplayer project is to add or play the youtube videos into the application can stored in different categories. And the watch history also get loads on this application."
            ghLink="https://github.com/ashikjoseph/mediaplayer-frontend.git"
            demoLink="https://mediaplayer-frontend-mu.vercel.app/"      
          />
        </Col>
      </Row>
    </Container>
  </Container>
  )
}

export default Projects