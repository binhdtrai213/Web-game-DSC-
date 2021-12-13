import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';

import { RemindOfAdd } from '../RemindAddCart/index';
import { RemindNotExist } from '../RemindGameNotExist/index';

import { ImageStyle, ComponentPage, ProductStyle, Title, ComponentProduct } from "./styles";

import { GiftOutlined } from "@ant-design/icons";

export const FreeGame = () => {
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
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `discover/freeGame`)).then((snapshot) => {
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

    return(
        <ComponentPage>
            <Title>
                <GiftOutlined className="icon-gift"/>
                <span className="title">Free Games</span>
            </Title>
            <ComponentProduct>
                {
                    data.map(todo => 
                        <ProductStyle onClick={() => !todo.status ? setIsExist(true) : setIsRemind({
                            status: true,
                            product: todo,
                        })}>
                            <div>
                                <ImageStyle src={todo.linkImage} />
                                {
                                    todo.status 
                                        ? <p style={{ background: '#0078f2' }}>FREE NOW</p> 
                                        : <p style={{ background: '#000000' }}>COMING SOON</p>
                                }
                            </div>
                            <span>{todo.name}</span>
                            <p className="content-product">{todo.content}</p>
                        </ProductStyle>
                    )
                }
            </ComponentProduct>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
            {isExist && <RemindNotExist changeExistStatusFunc={changeExistStatus} />}
        </ComponentPage>
    );
}