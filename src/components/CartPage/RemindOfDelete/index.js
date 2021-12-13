import React, { useState } from 'react';

import { Row, Col } from 'antd';

import { FirstLayer, SecondLayer, Drawer, ButtonClose, YesNoButton } from './styles';

import 'antd/dist/antd.css';

export const RemindOfDelete = (props) => {
    const changeIsRemind = props.changeIsRemindFunc;
    const [delayStyle, setDelayStyle] = useState({});
    const makeDelayStyle = () => {
        setTimeout(() => setDelayStyle({ opacity: '1' }), 200);
        return delayStyle;
    };
    return (
        <Drawer style={makeDelayStyle()}>
            <FirstLayer onClick={() => changeIsRemind(1)} />
            <SecondLayer>
                <ButtonClose>
                    <span onClick={() => changeIsRemind(1)}>×</span>
                </ButtonClose>
                <p>Are you sure you want to remove the game from the cart?</p>
                <Row justify="center" style={{ margin: '1rem 0' }}>
                    <Col>
                        <YesNoButton onClick={() => changeIsRemind(0)}>Yes</YesNoButton>
                    </Col>
                    <Col>
                        <YesNoButton onClick={() => changeIsRemind(1)}>No</YesNoButton>
                    </Col>
                </Row>
            </SecondLayer>
        </Drawer>
    );
};