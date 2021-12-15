import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';

import { RemindOfAdd } from '../RemindAddCart/index';
import { RemindLogin } from '../RemindLogin/index';

import { ImageStyle, ComponentPage, ContentProduct, ComponentProduct } from "./styles";


export const MostPopular = () => {
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
    const [isLogin, setIsLogin] = useState(true);
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `discover/mostPopular`)).then((snapshot) => {
            if (snapshot.exists()) {
                setData(snapshot.val());
            } else {
                setData([]);
            }
            }).catch((error) => {
                console.error(error);
            });
    },[]);
    const changeDataCart = (kind) => {
        if(kind === 1) {
            const db = getDatabase();
            set(ref(db, 'cart/' + isRemind.product.id), {
                ...isRemind.product
            });
        }
        setIsRemind({
            status: false,
            product: {},
        });
    }
    const checkLogin = async (todo) => {
        const dbRef = ref(getDatabase());
        let status = await get(child(dbRef, `authentication/status`)).then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val();
            } else {
                return false;
            }
            }).catch((error) => {
                console.error(error);
            })
        setIsLogin(status);
        if(status)
        {
            setIsRemind({
                status: true,
                product: todo,
            })
        }
    } 
    const doLogin = (kind) => {
        if(kind === 1)
        {
            ///do something to switch status isLogin
            console.log('do something to switch status isLogin');
        }
        setIsLogin(true);
    }
    const ContentComponent = () => {
        const count = window.matchMedia("(max-width: 768px)").matches ? 4 : 5;
        return(
            data.map((todo, id) => id < count &&
                <div onClick={() => checkLogin(todo)}>
                    <ImageStyle src={todo.linkImage} />
                    <ContentProduct>
                        <p className="name-product">{todo.name}</p>
                        <p className="content-product">{todo.content}</p>
                        <p>
                            {todo.price !== 0  
                                ? "₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : "Free"
                            }
                        </p>
                    </ContentProduct>
                </div>
            )
        );
    }
    return(
        <ComponentPage>
            <p className="title" >Most Popular</p>
            <ComponentProduct>
                {ContentComponent()}
            </ComponentProduct>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
            {!isLogin && <RemindLogin doLoginFunc={doLogin} />}
        </ComponentPage>
    );
}