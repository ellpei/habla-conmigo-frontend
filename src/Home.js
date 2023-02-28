import React from 'react';
import UserInfoForm from './components/UserInfoForm';

class Home extends React.Component {

        render() {

            return (
                <div className="home" id="app">
                    <h1>Welcome to Habla Conmigo!</h1>
                    <p>The collaborative language learning app</p>
                    <UserInfoForm></UserInfoForm>
                </div>
            );
        }
  }
export default Home;
