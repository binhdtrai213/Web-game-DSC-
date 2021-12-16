import '../App.css';

import { useState, useEffect } from 'react';
import { Navbar } from './Navbar/index';
import firebase from '../service/firebase';
import { Footer } from './Footer/index';
import { Login } from './LoginPage/index';
import WriteUser from './LoginPage/writeUser';
import { getDatabase, ref, child, get, set } from 'firebase/database';


function App() {
    
    const [user, setUser] = useState(null);


    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `authentication/User1`)).then((snapshot) => {
            if (snapshot.exists()) {
                setUser(snapshot);
                return snapshot.val();
            } else {
                return false;
            }
        }).catch((error) => {
            console.error(error);
        })

        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])
    console.log(user);
    return (
        <div>
            <div >
                {user ? <Navbar user={{ user }} /> : <Navbar />}
                </div>
            <Footer/>
        </div>
        );
}

export default App;