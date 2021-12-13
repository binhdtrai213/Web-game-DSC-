import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, set } from 'firebase/database';

import { RemindOfAdd } from '../RemindAddCart/index';

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
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `discover/mostPopular`)).then((snapshot) => {
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
    const ContentComponent = () => {
        const count = window.matchMedia("(max-width: 768px)").matches ? 4 : 5;
        return(
            data.map((todo, id) => id < count &&
                <div onClick={() => setIsRemind({
                    status: true,
                    product: todo,
                })}>
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
        </ComponentPage>
    );
}