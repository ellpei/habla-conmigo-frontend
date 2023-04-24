import React, { useState } from 'react';
import {Button, Container, Form, Col, Row}  from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function UserInfoForm () {

    const [username, setUsername] = useState("");
    const [language, setLanguage] = useState("swedish");
    const [numDesiredWords, setNumDesiredWords] = useState(10);

    const [sessionId, setSessionId] = useState("ABC");

    const navigate = useNavigate();

    const createAndGoToSession = async () => {
        const createdId = await createSession();
        if (createdId) {
            navigate('/gameplay', {
            state: {
                sessionId: createdId,
                username: username,
                preferredLanguage: language,
                numDesiredWords: numDesiredWords
            },
            });
        }
    }
    const createSession = async () => {
        const requestBody = {
            "username": username,
            "nativeLanguage": language,
            "numDesiredWords": numDesiredWords
            };
        console.log(requestBody);

        try {
          const response = await fetch('http://localhost:8080/session/create/', {
            method: 'POST',
            body:  JSON.stringify(requestBody),
            headers: { 'Content-type': 'application/json' },
          });
          const sessionId = await response.text();
          console.log("Created session with ID " + sessionId);
          setSessionId(sessionId);
          return sessionId;
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
