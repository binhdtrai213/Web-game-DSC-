import '../App.css';

import { useState, useEffect } from 'react';
import { DiscoverPage } from './DiscoverPage/index';
import { BrowsePage } from './BrowsePage/index';
import { Navbar } from './Navbar/index';
import firebase from '../service/firebase';
import { Login } from './LoginPage/index';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])
    console.log(user);
        return (
            <div className="App">
                {user ? <DiscoverPage user={user} /> && <Navbar user={user}/>
                      : <Login /> && <Navbar />}
            </div>
        );
}

export default App;