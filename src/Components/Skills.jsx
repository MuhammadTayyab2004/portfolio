import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Meter1 from '../img/meter1.svg';
import Meter2 from '../img/meter2.svg';
import Meter3 from '../img/meter3.svg';

function Skills() {
    return (
        <>
            <Container className=" text-center box">
                <h1>Skills</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem repellat qui!
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat exercitationem
                </p>

                <Row className=" d-flex justify-content-center box-row">
                    <Col sm={1} md={2}>
                        <img src={Meter1} alt="skill_img" />
                        <h6>Web Development</h6>
                    </Col>
                    <Col sm={1} md={2}>
                        <img src={Meter2} alt="skill_img" />
                        <h6>Web Design</h6>
                    </Col>
                    <Col sm={1} md={2}>
                        <img src={Meter3} alt="skill_img" />
                        <h6>Mobile App</h6>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Skills;

