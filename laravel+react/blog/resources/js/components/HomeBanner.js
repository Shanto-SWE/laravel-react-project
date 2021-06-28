import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

const HomeBanner = () => {
    return (
        <>

        <Container fluid className="parallax">
  <Row>
    <Col  className="top-div text-center" lg={6} md={6} sm={12}>
       <p className="text-center   m-0 top-title">Laravel 7 & 8</p>
                            <p className="text-center  m-0 top-subtitle">Learn With Md.Shanto Islam</p>
                            <p className=" text-center m-0 top-subtitle">Learn Something Good, Do Something Better</p>
                            <Button className="btn login-btn m-2">Login</Button>
    </Col>
    <Col  className="top-div  text-center" lg={6} md={6} sm={12}>
       <img  className="laravelLogo img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png"></img>
    </Col>
  </Row>
</Container>
            
        </>
    );
};

export default HomeBanner;