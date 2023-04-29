import React, { useState } from 'react';
import {Button, Container, Form, Col, Row, Alert} from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';

function JoinSessionForm() {

    const { state } = useLocation(); 
    const [username, setUsername] = useState(state.username);
    const [language, setLanguage] = useState(state.language);
    const [sessionId, setSessionId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            setValidated(true);
            callJoinSession();
        }
    };

    const callJoinSession = async() => {
        console.log("Trying to join sessionId " + sessionId);
        const requestBody = {
            "username": username,
            "nativeLanguage": language
        };
        console.log(requestBody);
        try {
            const response = await fetch('http://localhost:8080/session/' + sessionId + '/join', {
                method: 'POST',
                body:  JSON.stringify(requestBody),
                headers: { 'Content-type': 'application/json' },
            });
            const responseBody = await response.text();
            if (!response.ok) {
                console.error('Error: ' + JSON.stringify(responseBody));
                setErrorMessage(responseBody);
            } else {
                navigate('/gameplay/' + sessionId, {
                    state: {
                        sessionId: sessionId,
                        username: username,
                        gameState: responseBody
                    },
                });
            }
            } catch (error) {
            console.log(error.message);
            return null;
        }

        
    }

    return (
        <div className="join-session-form align-items-center" style={{ padding: "10%" }}>
            <Container className="d-flex justify-content-center my-3">
        
                <Form style={{ width: "300px" }} noValidate validated={validated}>
                    <h1>Join Session</h1>
                    {errorMessage.length > 0 &&
                        <Alert key="errorAlert" variant="danger">
                            {errorMessage}
                            </Alert>
                    }
                    <Form.Group controlId="formUsername" className="my-3" >
                    
                    <Form.Control required type="text" value={username} placeholder="username"
                        onChange={(e) => {setUsername(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="formGridLanguage" className="my-3">
                        <Form.Select aria-label="select-native-language" value={language}
                            onChange={(e) => {setLanguage(e.target.value)}} >
                            <option value="swedish">Swedish</option>
                            <option value="spanish">Spanish</option>
                        </Form.Select>
                    </Form.Group>
                    <Row>
                        <Form.Group controlId="formSessionId" className="my-3">
                            <Form.Control required type="text" placeholder="Session Id" onChange={(e) => {setSessionId(e.target.value)}}/>
                        </Form.Group>
                    </Row>

                    <Row >
                        <Form.Group controlId="formJoinSession" className="my-3">
                            <Row>
                            <Col>
                            <Button onClick={handleSubmit}>
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