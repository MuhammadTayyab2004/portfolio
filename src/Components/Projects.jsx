import React from "react";
import { Col, Row } from "react-bootstrap";

import Project1 from '../img/project-img1.png';
import Project2 from '../img/project-img2.png';
import Project3 from '../img/project-img3.png';


function Projects() {
    return (
        <>
            <div className=" container-fluid text-center project_box">
                <h1>Project</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum rerum aliquid voluptatum exercitationem ex dolor dolores. Nemo blanditiis minima at vero rem doloribus ea, fugit explicabo sit. Deleniti, culpa.
                </p>

                <Row className=" d-flex justify-content-center flex-row">
                    <Col sm={1} md={2} lg={3} >
                        <img src={Project1} alt="skill-img" />
                    </Col>
                    <Col sm={1} md={2} lg={3} >
                        <img src={Project2} alt="skill-img" />
                    </Col>
                    <Col sm={1} md={2} lg={3} >
                        <img src={Project3} alt="skill-img" />
                    </Col>
                </Row>
                <br />
                <br />
                <Row className=" d-flex justify-content-center flex-row">
                    <Col sm={1} md={2} lg={3} >
                        <img src={Project1} alt="skill-img" />
                    </Col>
                    <Col sm={1} md={2} lg={3} >
                        <img src={Project2} alt="skill-img" />
                    </Col>
                    <Col sm={1} md={2} lg={3} >
                        <img src={Project3} alt="skill-img" />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Projects;

