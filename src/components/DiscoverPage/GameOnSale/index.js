import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get } from 'firebase/database';

import { RemindOfAdd } from '../RemindAddCart/index';

import { ComponentPage, ImageStyle, ButtonStyle, ContentProduct, Title, ComponentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const GameOnSale = () => {
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
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });
    let carousel = React.createRef();
    const dataSlick = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 600,
                settings: 
                {
                    dot: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ],
    };

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `discover/gamesOnSale`)).then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
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
            let ok = true;
            let dataCart = JSON.parse(localStorage.getItem('user123'));
            for(let i = 0; i < dataCart.length; i++) {
                if(dataCart[i].name === isRemind.product.name)
                    ok = false;
            }
            if(ok) localStorage.setItem('user123', JSON.stringify([...dataCart, isRemind.product]));
        }
        setIsRemind({
            status: false,
            product: {},
        });
    }
    
    return(
        <ComponentPage>
            <Title>
                <p>Games On Sale</p>
                <div className="button-prev-next">
                    <ButtonStyle onClick={() => carousel.prev()}>
                        <LeftOutlined/>
                    </ButtonStyle>
                    <ButtonStyle onClick={() => carousel.next()}>
                        <RightOutlined />
                    </ButtonStyle>
                </div>
            </Title>

            <Carousel ref={(node) => (carousel = node)} {...dataSlick}>
                {
                    data.map(todo =>
                        <ComponentProduct onClick={() => setIsRemind({
                                status: true,
                                product: todo,
                            })}>
                            <ImageStyle src={todo.linkImage} />
                            <ContentProduct>
                                <p>{todo.name}</p>
                                <p style={{ opacity: '0.5' }}>{todo.content}</p>
                                <p>
                                    {todo.price !== 0  
                                        ? "₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                        : "Free"
                                    }
                                </p>
                            </ContentProduct>
                        </ComponentProduct>
                    )
                }
            </Carousel>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
        </ComponentPage>
    );
}