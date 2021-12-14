import React, { useState } from 'react';

import { FirstLayer, SecondLayer, Drawer, ButtonClose } from './styles';

import 'antd/dist/antd.css';

export const RemindNotExist = (props) => {
    const changeExistStatus = props.changeExistStatusFunc;
    const [delayStyle, setDelayStyle] = useState({});
    const makeDelayStyle = () => {
        setTimeout(() => setDelayStyle({ opacity: '1' }), 200);
        return delayStyle;
    };
    return (
        <Drawer style={makeDelayStyle()}>
            <FirstLayer onClick={() => changeExistStatus()} />
            <SecondLayer>
                <ButtonClose>
                    <span onClick={() => changeExistStatus()}>×</span>
                </ButtonClose>
                <p>You cannot add this game to your cart because it is not out yet.</p>
            </SecondLayer>
        </Drawer>
    );
};