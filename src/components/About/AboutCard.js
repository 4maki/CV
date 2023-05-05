import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Marijan Gulin </span>
            from <span className="purple"> Sibenik, Croatia.</span>
            <br />I am highly motivated and hardworking, seeking opportunity to learn and improve.
Through my college education and self-learning I have gathered many skills which I want to implement in a workplace and also acquire knowledge through work and further polish my skills as an individual but also as a team player. I enjoy every new challenge and I hope to find my next one at your firm.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Fishing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning something new
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
