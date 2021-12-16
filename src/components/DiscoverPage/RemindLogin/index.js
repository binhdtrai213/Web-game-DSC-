import React, { useState } from 'react';

import { Link } from "react-router-dom";

import { Row, Col } from 'antd';

import { FirstLayer, SecondLayer, Drawer, ButtonClose, YesNoButton } from './styles';

import 'antd/dist/antd.css';

export const RemindLogin = (props) => {
    const doLogin = props.doLoginFunc;
    const [delayStyle, setDelayStyle] = useState({});
    const makeDelayStyle = () => {
        setTimeout(() => setDelayStyle({ opacity: '1' }), 200);
        return delayStyle;
    };
    return (
        <Drawer style={makeDelayStyle()}>
            <FirstLayer onClick={() => doLogin(0)} />
            <SecondLayer>
                <ButtonClose>
                    <span onClick={() => doLogin(0)}>×</span>
                </ButtonClose>
                <p>You need to log in before buying the game to receive more incentives.</p>
                <Row justify="center" style={{ margin: '1rem 0' }}>
                    <Col>
                        <Link to="/sign-out">
                            <YesNoButton onClick={() => doLogin(1)}>Login</YesNoButton>
                        </Link>
                    </Col>
                </Row>
            </SecondLayer>
        </Drawer>
    );
};