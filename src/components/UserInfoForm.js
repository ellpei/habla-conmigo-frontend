import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import GoToSessionButton from './GoToSessionButton';
  
class UserInfoForm extends React.Component {


    render(props) {

        return (
            <div className="user-info-form">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Select aria-label="select-native-language">
                            <option value="swedish">Swedish</option>
                            <option value="spanish">Spanish</option>
                        </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridCity">
                        <GoToSessionButton >
                            Create session
                        </GoToSessionButton>
                    </Form.Group>
                        or
                    <Form.Group as={Col} controlId="formGridState">
                        <Button variant="light" type="submit">
                            Join session
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
            </div>
        );
    }
}
export default UserInfoForm;