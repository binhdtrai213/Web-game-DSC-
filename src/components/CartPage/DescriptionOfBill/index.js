import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, child, get, remove } from 'firebase/database';

import { Row, Col, Typography } from 'antd';

import { Loading } from '../Loading/index';
import { Description, ButtonOrder, ButtonBuyMore } from './styles.js';

import 'antd/dist/antd.css';

const { Title } = Typography;

export const DescriptionOfBill = (props) => {
    const updateData = props.updateDataFunc;
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

    const data = props.data;
    const [isLoading, setIsLoading] = useState(false);

    const totalBill = () => {
        let res = 0;
        data.map(
            (todo) => (res = res + todo[1].price)
        );
        return res;
    };
    const doLoading = () => {
        setIsLoading(true);
        const db = getDatabase();
        setTimeout(() =>{
            remove(ref(db, 'cart/'));
            updateData();
            setIsLoading(false);
        }, 3000);
    }

    return (
        <Description>
            <Row>
                <Title level={4} className="title">YOUR ORDER</Title>
            </Row>
            <Row justify="space-between">
                <Col>
                    <p>Quantity:</p>
                </Col>
                <Col>
                    {data.length}
                </Col>
            </Row>
            <Row justify="space-between">
                <Col>
                    <p>
                        <b>Total money:</b>
                    </p>
                </Col>
                <Col style={{ fontWeight: 'bold' }}>
                    {totalBill()
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                     ₫
                </Col>
            </Row>
            <Row>
                <ButtonOrder onClick={() => data.length && doLoading()}>BUY NOW</ButtonOrder>
            </Row>
            <Row>
                <ButtonBuyMore>BUY MORE</ButtonBuyMore>
            </Row>
            <Row>
                <i style={{ color: '#737575' }}>
                    * All costs include VAT (if any).
                </i>
            </Row>
            {isLoading && <Loading />}
        </Description>
    );
};