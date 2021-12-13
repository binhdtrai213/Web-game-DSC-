import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, remove } from 'firebase/database';

import { Row, Col, Divider, Typography, Image } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

import { DescriptionOfBill } from './DescriptionOfBill/index';
import { RemindOfDelete } from './RemindOfDelete/index';
import {
    ComponentItems,
    contentBill,
    imageStyle,
    Text,
    centerStyle,
    ButtonStyle,
} from './styles.js';

import 'antd/dist/antd.css';

const { Title } = Typography;

export const CartPage = () => {
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
        id: 0,
    });

    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `cart`)).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val());
                setData(Object.entries(snapshot.val()));
            } else {
                setData([]);
            }
            }).catch((error) => {
                console.error(error);
            });
    },[]);
    const changeIsRemind = (ok) => {
        if (ok === 0) {
            const db = getDatabase();
            remove(ref(db, 'cart/' + isRemind.id));
            const dbRef = ref(getDatabase());
            get(child(dbRef, `cart`)).then((snapshot) => {
                if (snapshot.exists()) {
                    // console.log(snapshot.val());
                    setData(Object.entries(snapshot.val()));
                } else {
                    setData([]);
                }
                }).catch((error) => {
                    console.error(error);
                }
            );
        }
        setIsRemind({
            status: false,
            id: 0,
        });
    };
    // print bill
    const classify = (todo) => {
        return (
            <div height={'100%'} offset={100}>
                <Row style={contentBill} justify="space-between">
                    <Col lg={4} md={5} sm={6} xs={7} style={{ ...centerStyle, borderRadius: '10px' }}>
                        <Image src={todo.cartImage} style={imageStyle} />
                    </Col>
                    <Col lg={19} md={18} sm={17} xs={16}>
                        <Row justify="space-between">
                            <Col span={20}>
                                <Text>
                                    <p className="name-product">{todo.name}</p>
                                    <p className="content-product">{todo.content}</p>
                                    <p className="price-product">
                                        {todo.price > 0 
                                            ? todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+" ₫"
                                            : "Free"
                                        }
                                    </p>
                                </Text>
                            </Col>
                            <Col span={3} style={{ ...centerStyle, justifyContent: 'flex-end' }}>
                                <ButtonStyle onClick={() => setIsRemind({ status: true, id: todo.id, })}>
                                    <DeleteOutlined/>
                                </ButtonStyle>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Divider style={{ margin: '1rem 0' }} />
            </div>
        );
    };

    return (
        <ComponentItems>
            <Row>
                <Title level={4} className="title">YOUR CART</Title>
            </Row>
            <Row justify="space-between">
                <Col xl={16} lg={15} md={24} sm={24} xs={24}>
                    {data.length > 0 ? (
                        <div>{data.map((todo) => classify(todo[1]))}</div>
                    ) : (
                        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
                            Your shopping cart is empty
                        </p>
                    )}
                </Col>
                <Col xl={7} lg={8} md={24} sm={24} xs={24}>
                    <DescriptionOfBill data={data} />
                </Col>
            </Row>
            {isRemind.status && <RemindOfDelete changeIsRemindFunc={changeIsRemind} />}
        </ComponentItems>
    );
};