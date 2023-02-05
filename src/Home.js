import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import UserInfoForm from './components/UserInfoForm';

class Home extends React.Component {

        render() {

            return (
                <div className="home">
                    <h1>Welcome to Habla Conmigo!</h1>
                    <UserInfoForm></UserInfoForm>
                </div>
            );
        }
  }
export default Home;
