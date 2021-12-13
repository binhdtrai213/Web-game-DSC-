import React, { useState } from 'react';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { FirstLayer, SecondLayer, Drawer } from './styles';

import 'antd/dist/antd.css';

export const Loading = (props) => {
    const antIcon = <LoadingOutlined style={{ fontSize: '100px', color: "#05d774" }} spin />;
    
    const [delayStyle, setDelayStyle] = useState({});
    const makeDelayStyle = () => {
        setTimeout(() => setDelayStyle({ opacity: '1' }), 200);
        return delayStyle;
    };
    return (
        <Drawer style={makeDelayStyle()}>
            <FirstLayer />
            <SecondLayer>
                <h2 className="title">Your game is being downloaded.</h2>
                <Spin indicator={antIcon} />
            </SecondLayer>
        </Drawer>
    );
};