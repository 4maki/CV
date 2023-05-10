import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import DesignCarousel from "./DesignCarousel";

function Design() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Design </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <DesignCarousel />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Design;
