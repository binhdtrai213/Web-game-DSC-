import React, { useEffect, useState } from 'react';
import { DiscoverPage } from '../DiscoverPage/index';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { BrowsePage } from '../BrowsePage/index';
import Search from './searchComponent';
import { Login } from '../LoginPage/index';
import { auth } from '../../service/firebase'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
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



export const Navbar = ({ user }) => {


    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    useEffect(() => {
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
    }, [])

   



    return (
        <Router>
            <div className={classes.root}>

                <AppBar position="fixed" className={classes[navRef.current]} >
                    <Bars />
                 
                    <NavMenu>
                        <NavMenu>
                            <Search />
                        </NavMenu>

                        <NavMenu>
                            <NavLink to='/Discover' activeStyle>
                                Discover
                            </NavLink>
                        </NavMenu>

                        <NavMenu>
                                <NavLink to='/Browse' activeStyle>
                                Browse
                                </NavLink>
                         </NavMenu>
                        {/* Second Nav */}
                        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                    <NavMenu>
                           <NavBtn>
                                {user ? <NavBtnLink onClick={() => auth.signOut()} to='/sign-out'>Sign Out</NavBtnLink>
                                      : <NavBtnLink onClick={() => auth.signOut()} to='/sign-out'>Sign In</NavBtnLink>}
                           </NavBtn>
                     </NavMenu>
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
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};



