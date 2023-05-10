import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import masklin from "../../Assets/Projects/masklin.png";
import chatmate from "../../Assets/Projects/chatmate.png";
import swapi from "../../Assets/Projects/swapi.png";
import Design from "../Design/Design";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={swapi}
                            isBlog={false}
                            title="SWAPI"
                            description="Star Wars app, fetching data from API and implementing on page"
                            ghLink="https://github.com/4maki"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatmate}
                            isBlog={false}
                            title="ChatMate"
                            description="Personal Chat Room to hangout with friends build with react.js"
                            ghLink="https://github.com/4maki/ChatMate"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={masklin}
                            isBlog={false}
                            title="Masklin&lata"
                            description="Restaurant landing page with few components"
                            ghLink="https://github.com/"
                        />
                    </Col>
                </Row>
                <Row>
                    <Design />
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
