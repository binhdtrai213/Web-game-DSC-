import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { signInWithGoogle } from '../../service/firebase';
import { FcGoogle } from "react-icons/fc";
import { ButtonOrder } from '../CartPage/DescriptionOfBill/styles';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';
import firebase from '../../service/firebase';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";



export const Login = ({ userCheck }) => {
    const [user, setUser] = useState(null);

    const firebaseConfig = {
        apiKey: "AIzaSyCpMV7oa-Ub9JggYajdeCwP5iZ1WvkbWpc",
        authDomain: "web-game-dsc.firebaseapp.com",
        databaseURL: "https://web-game-dsc-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "web-game-dsc",
        storageBucket: "web-game-dsc.appspot.com",
        messagingSenderId: "346312806625",
        appId: "1:346312806625:web:ce9990747594b69101e7a0",
        measurementId: "G-MYD8JRXN9F"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    const [data, setData] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

   

    async function handleSubmit(event) {
        const dbRef = ref(getDatabase());
        let status = await get(child(dbRef, `authentication/User1`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot);
                return snapshot.val();
            } else {
                return false;
            }
        }).catch((error) => {
            console.error(error);
        })

        const db = getDatabase();

        if (status.username == username && status.password == password) {
            set(ref(db, 'authentication/User1/status'), true);
            setIsLogin(true);
            userCheck = true;
        } else {
            set(ref(db, 'authentication/User1/status'), false);
            setIsLogin(false);
            userCheck = false;
        }
    }
    /*check user login*/
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `authentication/User1`)).then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
                const db = getDatabase();
                /*User data*/
                if (userCheck == false) {
                    set(ref(db, 'authentication/User1/status'), false);
                    setIsLogin(false);
                    userCheck = false;
                }
            } else {
                setData([]);
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    /*check google login*/
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            if (user)
                setIsLogin(true);
            else
                setIsLogin(false);
        })
    }, [])

    return (
        <div className="LoginPage" >
            <div className="Login">
                    {isLogin && <Redirect to="/Discover" />}
                    <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                        <ButtonOrder type="submit" className="LoginBtn"> Login </ButtonOrder>
                    </Form>
                    <Button className="GoogleBtn" size="lg" onClick={signInWithGoogle}>
                        <FcGoogle style={{
                                fontSize: '30px',
                                margin: '5px'}}/>
                                Sign in with google
                    </Button>
                </div>
            </div>
    );

}
/*Login.propTypes = {
    userCheck: PropTypes.func.isRequired
};*/

export default Login;