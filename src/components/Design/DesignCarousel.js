import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import Dalmatia from "../../Assets/design/Dalmatiasefood-01.png";
import Dalmatia1 from "../../Assets/design/Dalmatiasefood-02.png";
import Aspira from "../../Assets/design/Cjeloživotno obrazovanje-03.jpg";
import Aspira1 from "../../Assets/design/Cjeloživotno obrazovanje-09.jpg";
import Aspira2 from "../../Assets/design/Cjeloživotno obrazovanje-15.png";
import Point from "../../Assets/design/digitalna-01.png";

function DesignCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className="project-section">
            <Row>
                <Carousel
                    activeIndex={index}
                    onSelect={handleSelect}
                    className="carousel"
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Point}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Dalmatia}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Dalmatia1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Aspira}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Aspira1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Aspira2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}
export default DesignCarousel;
