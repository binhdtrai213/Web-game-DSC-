import React, { useState } from 'react';

import { Row, Col, Divider, Typography, Image } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

import { ApiData } from './DummyData';
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
    const [data, setData] = useState(ApiData);
    const [isRemind, setIsRemind] = useState({
        status: false,
        id: 0,
    });

    const changeIsRemind = (ok) => {
        if (ok === 0) {
            const newProductOfBill = data.filter((todo) => todo.id !== isRemind.id);
            setData( newProductOfBill );
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
                        <Image src={todo.linkImage} style={imageStyle} />
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
                        <div>{data.map((todo) => classify(todo))}</div>
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