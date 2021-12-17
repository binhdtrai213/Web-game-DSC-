/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { ComponentPage, Header, Content } from "./styles";

import { FacebookOutlined, TwitterOutlined, YoutubeOutlined, UpSquareOutlined } from '@ant-design/icons';

export const Footer = () => {
    return(
        <div className="footer">
            <Header>
                <div>
                    <a href={'https://www.facebook.com/epicgames'}>
                        <FacebookOutlined className="social-icon" />
                    </a>
                    <a href={'https://twitter.com/epicgames'}>
                        <TwitterOutlined className="social-icon" />
                    </a>
                    <a href={'https://www.youtube.com/epicgamesinc'}>
                        <YoutubeOutlined className="social-icon" />
                    </a>
                </div>
                <UpSquareOutlined 
                    className="scroll-top-icon" 
                    onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}
                />
            </Header>
            <Content>
                <p>© 2021, Epic Games, Inc. All rights reserved. Epic,
                 Epic Games, the Epic Games logo, Fortnite, the Fortnite
                  logo, Unreal, Unreal Engine, the Unreal Engine logo, 
                  Unreal Tournament, and the Unreal Tournament logo are 
                  trademarks or registered trademarks of Epic Games, Inc. 
                  in the United States of America and elsewhere. Other 
                  brands or product names are the trademarks of their 
                  respective owners. Non-US transactions through Epic 
                  Games International, S.à r.l. </p>
            </Content>
        </div>
    );
}