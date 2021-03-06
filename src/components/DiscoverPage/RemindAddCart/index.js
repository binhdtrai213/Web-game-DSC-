import React, { useState } from 'react';

import { Row, Col } from 'antd';

import { FirstLayer, SecondLayer, Drawer, ButtonClose, YesNoButton } from './styles';

import 'antd/dist/antd.css';

export const RemindOfAdd = (props) => {
    const changeDataCart = props.changeDataCartFunc;
    const [delayStyle, setDelayStyle] = useState({});
    const makeDelayStyle = () => {
        setTimeout(() => setDelayStyle({ opacity: '1' }), 200);
        return delayStyle;
    };
    return (
        <Drawer style={makeDelayStyle()}>
            <FirstLayer onClick={() => changeDataCart(0)} />
            <SecondLayer>
                <ButtonClose>
                    <span onClick={() => changeDataCart(0)}>×</span>
                </ButtonClose>
                <p>Are you sure you want to add the game to the cart?</p>
                <Row justify="center" style={{ margin: '1rem 0' }}>
                    <Col>
                        <YesNoButton onClick={() => changeDataCart(1)}>Yes</YesNoButton>
                    </Col>
                    <Col>
                        <YesNoButton onClick={() => changeDataCart(0)}>No</YesNoButton>
                    </Col>
                </Row>
            </SecondLayer>
        </Drawer>
    );
};