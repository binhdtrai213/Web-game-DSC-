import React, { useEffect, useState } from 'react';
import { DiscoverPage } from '../DiscoverPage/index';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { BrowsePage } from '../BrowsePage/index';
import Search from './searchComponent';
import { Login } from '../LoginPage/index';
import { auth } from '../../service/firebase'
import { CartPage } from '../CartPage/index';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, set, get } from 'firebase/database';
import firebase from '../../service/firebase';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavItem,
} from './navbarsStyle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgb(19 32 40 / 50%)'
    },
    appBarSolid: {
        backgroundColor: 'rgb(5 14 5)'
    }
}));



export const Navbar = () => {
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

    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const [user, setUser] = useState(false);
    const navRef = React.useRef()

    navRef.current = navBackground
    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `authentication/User1`)).then((snapshot) => {
            if (snapshot.exists()) {
                setUser(snapshot.val().status);
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

        // ------------------------------------------------
        
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }

    }, []);

   
    const signOut = () => {
        auth.signOut();
        const db = getDatabase();
        set(ref(db, 'authentication/User1/status'), false);
        setUser(false);
    }


    return (
        <Router>
            <Redirect to="/Discover" />
            <div className={classes.root}>

                <AppBar position="fixed" className={classes[navRef.current]} >
                    <Bars />
                 
                    <NavMenu>
                        <div className="content-left">
                            <NavItem>
                                <Search />
                            </NavItem>

                            <NavItem>
                                <NavLink to='/Discover' activeStyle>
                                    Discover
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                    <NavLink to='/Browse' activeStyle>
                                    Browse
                                    </NavLink>
                            </NavItem>

                            <NavItem>
                                {user ? <NavLink to='/Cart' activeStyle> Your Cart</NavLink>
                                    : <NavLink to=''> </NavLink>}
                            </NavItem>
                        </div>
                        <div content="content-right">
                            <NavItem style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <NavBtn>
                                        {user ? <NavBtnLink onClick={signOut} to='/sign-out'>Sign Out</NavBtnLink>
                                            : <NavBtnLink onClick={() => auth.signOut()} to='/sign-out'>Sign In</NavBtnLink>}
                                </NavBtn>
                            </NavItem>
                        </div>
                        
                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                        
                    </NavMenu>
                </AppBar>
                <Switch>
                    <Route path="/Discover">
                        <DiscoverPage />
                    </Route>
                    <Route path="/Browse">
                        <BrowsePage />
                    </Route>
                    <Route path="/sign-in">
                        <Login />
                    </Route>
                    <Route path="/sign-out">
                        <Login user={false} />
                    </Route>
                    <Route path="/Cart">
                        <CartPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};



