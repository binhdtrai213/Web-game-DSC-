import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';

import { RemindOfAdd } from '../RemindAddCart/index';
import { RemindNotExist } from '../RemindGameNotExist/index';
import { RemindLogin } from '../RemindLogin/index';
 
import { ComponentBanner, ImageStyle, ButtonNext, ButtonPrev, ContentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const Banner = () => {
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
    let carousel = React.createRef();
    const dataSlick = {
        autoplay: true,
        autoplaySpeed: 5000, //5000
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `discover/banner`)).then((snapshot) => {
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
            setIsRemind({
                status: true,
                product: todo,
            })
    } 
    const doLogin = (kind) => {
        if(kind === 1)
        {
            ///do something to switch status isLogin
            console.log('do something to switch status isLogin');
        }
        setIsLogin(true);
    }

    return(
        <ComponentBanner>
            <ButtonPrev onClick={() => carousel.prev()}>
                <LeftOutlined />
            </ButtonPrev>

            <ButtonNext onClick={() => carousel.next()}>
                <RightOutlined />
            </ButtonNext>

            <Carousel ref={(node) => (carousel = node)} {...dataSlick}>
                {
                    data.map(todo =>
                        <div>
                            <ImageStyle src={todo.linkImage} />
                            <ContentProduct>
                                <p>{todo.content}</p>
                                <span>
                                    {todo.price > 0 && <span>Starting at</span>}
                                    {todo.price > 0  
                                        ? " ₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                        : "Free"
                                    }
                                </span>
                                <button onClick={() => checkLogin(todo)}>BUY NOW</button>
                            </ContentProduct>
                        </div>
                    )
                
                }
            </Carousel>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
            {isExist && <RemindNotExist changeExistStatusFunc={changeExistStatus} />}
            {!isLogin && <RemindLogin doLoginFunc={doLogin} />}
        </ComponentBanner>
    );
}