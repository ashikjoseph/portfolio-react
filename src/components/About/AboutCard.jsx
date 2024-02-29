import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashik Joseph </span>
            from <span className="purple"> Kodungallur.</span>
            <br />
            I am currently getting trained on MEARN Stack Development at Luminar, Kochi.
            <br />
            I have completed BTech in Mechanical Engineering at SNGIST,
            Manjali.
            <br />
            <br />
            Along with this, I also loved to to work as a freelancer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content writing
            </li>
            <li className="about-activity">
              <ImPointRight /> Blogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;