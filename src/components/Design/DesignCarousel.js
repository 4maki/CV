import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import Dalmatia from "../../Assets/design/Dalmatiasefood-01.png";
import Dalmatia1 from "../../Assets/design/Dalmatiasefood-02.png";
import Rock from "../../Assets/design/Rockwool1.png";
import Rock1 from "../../Assets/design/Rockwool2.png";
import ASOB from "../../Assets/design/ASOB - RADNO VRIJEME STORY-01.png";
import ASOB1 from "../../Assets/design/ASOB Sushi-02.png";
import Roses from "../../Assets/design/ROSES1.png";
import Roses1 from "../../Assets/design/ROSES2.png";
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
                            src={Rock}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Rock1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ASOB}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ASOB1}
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Roses}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Roses1}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    );
}
export default DesignCarousel;
