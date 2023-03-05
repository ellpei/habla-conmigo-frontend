import React, { useState } from 'react';
import {Button, Container, Form, Col, Row}  from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function UserInfoForm () {

    const [username, setUsername] = useState("");
    const [language, setLanguage] = useState("swedish");
    const [sessionId, setSessionId] = useState("ABC");

    const navigate = useNavigate();

    const createAndGoToSession = async () => {
        const sessionData = await createSession();
        if (sessionData) {
            navigate('/gameplay', {
            state: {
                sessionId: sessionData.sessionId,
                username: username,
                preferred_language: language,
            },
            });
        }
    }
    const createSession = async () => {
        try {
          const response = await fetch('http://localhost:8080/session/create/', {
            method: 'POST',
            body: '{}',
            headers: { 'Content-type': 'application/json' },
          });
          console.log(response);
          setSessionId(response.sessionId);
          return response;
        } catch (error) {
          console.log(error.message);
          return null;
        }
    };

    const goToJoinSessionForm = () => {
        navigate(
            '/joinSession',
            {
                state: { 
                    username: username, 
                    language: language
                }
            }
        );
    }

    return (
        <div className="user-info-form">
            <Container className="d-flex justify-content-center my-3">
                <Form style={{ width: "300px" }}>
                    <Form.Group controlId="formUsername" className="my-3" >
                    <Form.Control type="text" placeholder="username" 
                        onChange={(e) => {setUsername(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="formGridLanguage" className="my-3">
                        <Form.Select aria-label="select-native-language"
                            onChange={(e) => {setLanguage(e.target.value)}} >
                            <option value="swedish">Swedish</option>
                            <option value="spanish">Spanish</option>
                        </Form.Select>
                    </Form.Group>
                    <Row>
                    <Col>
                        <Button variant="primary" onClick={createAndGoToSession}>
                            Create session
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="light" onClick={goToJoinSessionForm}>
                        Join session
                        </Button>
                    </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
    
}
export default UserInfoForm;
