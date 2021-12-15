import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';

import { RemindOfAdd } from '../RemindAddCart/index';
import { RemindNotExist } from '../RemindGameNotExist/index';
import { RemindLogin } from '../RemindLogin/index';

import { ComponentPage, ImageStyle, ProductStyle } from "./styles";
import "antd/dist/antd";

export const SyntheticPart = (props) => {
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
    const [isExist, setIsExist] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });
    const dataSlick = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:[ 
            {
                breakpoint: 800,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    }

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `discover/syntheticPath`)).then((snapshot) => {
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
    const changeExistStatus = () => {
        setIsExist(false);
    }     
    const checkLogin = async (todo, newTodo) => {
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
            todo.id === 3 
                ? setIsExist(true) 
                : setIsRemind({
                    status: true,
                    product: newTodo,
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

    return (
        <ComponentPage>
            <Carousel {...dataSlick}>
            {
                data.map(todo => 
                    <div className={`column${todo.id}`}>
                        <p className={"title"}>{todo.title}</p>
                        {
                            todo.product.map(newTodo => 
                            <ProductStyle onClick={() => checkLogin(todo, newTodo)}>
                                <ImageStyle src={newTodo.linkImage} />
                                <div className="content">
                                    <p className="name-product">{newTodo.name}</p>
                                    {todo.id !== 3 && <span className="price-product">
                                        {newTodo.price !== 0  
                                            ? "₫ " + newTodo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                            : "Free"
                                        }
                                    </span>}
                                </div>
                            </ProductStyle>
                            )
                        }
                    </div>
                )
            }
            </Carousel>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
            {isExist && <RemindNotExist changeExistStatusFunc={changeExistStatus} />}
            {!isLogin && <RemindLogin doLoginFunc={doLogin} />}
        </ComponentPage>
    );
}