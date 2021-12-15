import React from 'react';
import "antd/dist/antd.css";
import { Menu } from 'antd';
const { SubMenu } = Menu;

export const SideBar= () => {

    return (
        <div style={{
            display: 'block', width: '20%', padding: '60px 10px', float: 'right'
        }}>
            <h3 style={{ color:"white", fontSize: '15px'}}>Filter</h3>
            <Menu
                defaultOpenKeys={['1']}
                defaultSelectedKeys={['1']}
                style={{
                    width: '100%',
                    background: 'transparent',
                    color: 'white' }}
                mode="inline"
            >
                <SubMenu style={{boxShadow: '0px 1px #ffffff75'}} key="2" title="Settings">
                    <Menu.Item key="2">Option 1</Menu.Item>
                    <Menu.Item key="3">Option 2</Menu.Item>
                    <SubMenu key="4" title="Sub-Menu">
                        <Menu.Item key="5">Option 3</Menu.Item>
                        <Menu.Item key="6">Option 4</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu style={{ boxShadow: '0px 1px #ffffff75' }} key="7" title="Profile">
                    <Menu.Item key="8">Option 5</Menu.Item>
                    <Menu.Item key="9">Option 6</Menu.Item>
                    <Menu.Item key="10">Option 7</Menu.Item>
                    <Menu.Item key="11">Option 8</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    );
}