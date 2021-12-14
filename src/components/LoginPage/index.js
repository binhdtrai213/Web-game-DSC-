import React, { useState } from "react";
import App from "../App";
import { DiscoverPage } from '../DiscoverPage/index';
import { Navbar } from "../Navbar/index";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signInWithGoogle } from '../../service/firebase';



export const Login = ({ user }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            color: 'white',
            paddingTop: '10%'
        }}
            className="Login">
            <Form style={{ width: '22%' }} onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button style={{
                    width: '100%',
                    margin: '9% 0'
                }} size="lg" type="submit" onClick={signInWithGoogle}>
                    <i className="fab fa-google"></i>
                    <br />Sign in with google
                </Button>
            </Form>
        </div>
    );

}


export default Login;