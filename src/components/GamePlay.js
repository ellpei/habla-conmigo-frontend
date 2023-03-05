import React from 'react';
import {Button, Container, Form, Col, Row, Card}  from 'react-bootstrap';
import {useLocation, useNavigate} from 'react-router-dom';

function GamePlay() {
    const { state } = useLocation(); 

    console.log(state);

    const fetchGameState = (params) => {
        
    }

    return (
        <div className="gameplay align-items-center" style={{ padding: "2%" }}>
            <Container className="jumbotron" >
                    <Row>
                        <h1 className="display-8">Game on!</h1>
                        <p className="lead">Remember to help each other, you get more points if both players pass</p>
                        <p>SessionId: {state.sessionId}</p>
                    </Row>
            </Container>

            <Container>
                <Row style={{ padding: "2%" }}>
                    <Card >
                        <Card.Body>
                            <Card.Title>Äter</Card.Title>
                            <Card.Text>
                                Verify if your friend said the word right, as a bonus, ask them to use it in a sentence.
                            </Card.Text>
                            <Row>
                                <Col>
                                    <Button variant="success">Passed!</Button>
                                </Col>
                                <Col>
                                    <Button variant="light">Skip</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
                <Row style={{ padding: "2%" }}>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Your points</Card.Title>
                                <Card.Text>
                                    50
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>OpponentName's points</Card.Title>
                                <Card.Text>
                                    50
                                </Card.Text>
                            </Card.Body>
                        </Card> 
                    </Col>
                </Row>            
            </Container>
        </div>
    );
}
export default GamePlay;