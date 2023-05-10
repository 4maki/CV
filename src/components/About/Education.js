import React from "react";
import { Col, Row } from "react-bootstrap";

function Education() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <h4>Faculty of Graphic Arts</h4>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <h4>Algebra</h4> <h6> Frontend developer </h6>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <h4>Online courses</h4> <h6>udemy, freeCodeCamp</h6>
            </Col>
        </Row>
    );
}

export default Education;
