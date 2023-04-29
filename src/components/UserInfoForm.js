import React, { useState } from 'react';
import {Button, Container, Form, Col, Row, Alert}  from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function UserInfoForm () {

    const [username, setUsername] = useState("");
    const [language, setLanguage] = useState("swedish");
    const [numDesiredWords, setNumDesiredWords] = useState(10);
    const [errorMessage, setErrorMessage] = useState("");
    const [sessionId, setSessionId] = useState("ABC");
    const [validated, setValidated] = useState(false);

    const navigate = useNavigate();

    const createAndGoToSession = async () => {
        if (validated) {
            const createdId = await createSession();
            if (createdId !== "") {
                navigate('/gameplay/' + createdId, {
                state: {
                    sessionId: createdId,
                    username: username,
                    preferredLanguage: language,
                    numDesiredWords: numDesiredWords
                },
                });
            } else {
                setErrorMessage("Error creating session, please try again");
            }
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
          if (response.ok) {
            const sessionId = await response.text();
            console.log("Created session with ID " + sessionId);
            setSessionId(sessionId);
            return sessionId;
          } else {
            return "";
          }
          
        } catch (error) {
          console.log(error.message);
          return null;
        }
    };

    const goToJoinSessionForm = () => {
        navigate(
            '/join',
            {
                state: { 
                    username: username, 
                    language: language
                }
            }
        );
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
            setValidated(true);
            createAndGoToSession();
        }
    };

    return (
        <div className="user-info-form">
            <Container className="d-flex justify-content-center my-3">
                <Form style={{ width: "300px" }} noValidate validated={validated}>
                {errorMessage.length > 0 &&
                   <Alert key="errorAlert" variant="danger">
                    {errorMessage}
                    </Alert>
                }
                    
                    <Form.Group controlId="formUsername" className="my-3" >
                    <Form.Control required type="text" placeholder="username" 
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
                        <Button variant="primary" onClick={handleSubmit}>
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
