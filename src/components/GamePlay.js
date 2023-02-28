import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GamePlay extends React.Component {

    render() {
        return (
            <div className="gameplay">
                <h1>Gameplay</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>
                </Row>
            </Form>
            </div>
        );
    }
}
export default GamePlay;