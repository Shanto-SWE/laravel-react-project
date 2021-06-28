import React from 'react';
import loadingImg from '../../images/loading.svg';
import {Col, Container, Row} from "react-bootstrap";


const LoadingDiv = () => {
    return (
        <>
              <Container>
                    <Row className="d-flex mt-5 mb-5  justify-content-center">
                        <Col className="text-center" lg={3} md={3} sm={12}>
                            <img className="loading-logo" src={loadingImg}/>
                        </Col>
                    </Row>
                </Container>
        </>
    );
};

export default LoadingDiv;