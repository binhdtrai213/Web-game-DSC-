import React, { useState } from 'react';

import { FirstLayer, SecondLayer, Drawer, ButtonClose } from './styles';

import 'antd/dist/antd.css';

export const RemindNotExist = (props) => {
    const changeExistStatus = props.changeExistStatusFunc;
    const makeDelayStyle = () => {
        setTimeout(() => setDelayStyle({ opacity: '1' }), 200);
        return {};
    };
    const [delayStyle, setDelayStyle] = useState(makeDelayStyle());
    return (
        <Drawer style={delayStyle}>
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