import React from 'react';
import UserInfoForm from './components/UserInfoForm';
import {Button, Container, Form, Col, Row}  from 'react-bootstrap';

function Home() {

    return (
        <div className="home" id="app" >
            <Container className="align-items-center" style={{ padding: "10%" }}>
                <Container className="jumbotron" >
                    <Row>
                        <h1 className="display-8">Welcome to Habla Conmigo!</h1>
                        <p className="lead">The collaborative language learning app</p>
                    </Row>
                    <UserInfoForm></UserInfoForm>
                </Container>
            </Container>
        </div>
    );
}
export default Home;
