import React, { Component } from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm'
import Navbar from '../components/Navbar/navbar';

class Register extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <RegisterForm />
            </div>
        )
    }

}

export default Register;