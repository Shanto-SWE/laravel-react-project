import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const CoursePlanItem = () => {
    return (
        <>
             <Container fluid={true} className="jumbotron  section-marginbg jumbotron-fluid">
                        <Row className="row px-5 justify-content-md-center  ">
                            <Col className="col-lg-6 col-md-6 col-12">
                            <h2>What You Going To Learn</h2>
                            <p>About 76% web application runs on PHP.Laravel is the most powerful and popular framework of PHP. This series start from laravel basic and ends with laravel live project.The overall skills gained from this project based courses will prepare you for any type of project development.</p>

                            <ul>
                                <li>We should learn laravel as laravel</li>
                                <li>Laravel latest version 7 & 8</li>
                                <li>First we learn the basic of laravel</li>
                                <li>Then we go deeper cover A-Z of laravel features</li>
                                <li>Then we perform full web application project</li>
                            </ul>
                                
                            </Col>
                            <Col className="col-lg-6 col-md-6 col-12">
                            <video width="600" height="300" controls >
                                    <source src="http://codesilicon.com/paidvideos/Laravel/Video/1.mp4" type="video/mp4"/>
                                    </video>
                              </Col>
                        </Row>
                    </Container>
        </>
    );
};

export default CoursePlanItem;