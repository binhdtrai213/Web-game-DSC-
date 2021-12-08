import React from 'react';

import { Row, Col, Typography } from 'antd';

import { Description, ButtonOrder, ButtonBuyMore } from './styles.js';

import 'antd/dist/antd.css';

const { Title } = Typography;

export const DescriptionOfBill = (props) => {
    const data = props.data;

    const totalBill = () => {
        let res = 0;
        data.map(
            (todo) => (res = res + todo.price)
        );
        return res;
    };

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
                <ButtonOrder>BUY NOW</ButtonOrder>
            </Row>
            <Row>
                <ButtonBuyMore>BUY MORE</ButtonBuyMore>
            </Row>
            <Row>
                <i style={{ color: '#737575' }}>
                    * All costs include VAT (if any).
                </i>
            </Row>
        </Description>
    );
};