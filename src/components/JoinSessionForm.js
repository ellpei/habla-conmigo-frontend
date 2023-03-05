import React, { useState } from 'react';
import {Button, Container, Form, Col, Row} from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';

function JoinSessionForm() {

    const { state } = useLocation(); 

    console.log(state);
    const navigate = useNavigate();

    const callJoinSession = (username, language) => {
        
    }

    return (
        <div className="join-session-form align-items-center" style={{ padding: "10%" }}>
            <Container className="d-flex justify-content-center my-3">
                <Form style={{ width: "300px" }}>
                    <h1>Join Session</h1>
                    <Row>
                        <p>
                            <b>Username: </b> {state.username}
                        </p>
                        <p>
                            <b>Preferred Language: </b> {state.language}
                        </p>
                    </Row>
                    <Row>
                        <Form.Group controlId="formSessionId" className="my-3">
                            <Form.Control type="text" placeholder="Session Id" />
                        </Form.Group>
                    </Row>

                    <Row >
                        <Form.Group controlId="formJoinSession" className="my-3">
                            <Row>
                            <Col>
                            <Button >
                                Join session
                            </Button>
                            </Col>
                            <Col>
                                <Button variant="light" onClick={ () => navigate(-1)}>
                                    Back
                                </Button>
                            </Col>
                            </Row>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </div>
    );
    
}
export default JoinSessionForm;