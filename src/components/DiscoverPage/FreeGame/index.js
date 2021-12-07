import React from "react";

import { Data } from "./DummyData";

import { ImageStyle, ComponentPage, ProductStyle, Title, ComponentProduct } from "./styles";

import { GiftOutlined } from "@ant-design/icons";

export const FreeGame = () => {
    const data = Data; 

    return(
        <ComponentPage>
            <Title>
                <GiftOutlined className="icon-gift"/>
                <span className="title">Free Games</span>
            </Title>
            <ComponentProduct>
                {
                    data.map(todo => 
                        <ProductStyle>
                            <div>
                                <ImageStyle src={todo.linkImage} />
                                {
                                    todo.status 
                                        ? <p style={{ background: '#0078f2' }}>FREE NOW</p> 
                                        : <p style={{ background: '#000000' }}>COMING SOON</p>
                                }
                            </div>
                            <span>{todo.name}</span>
                            <p className="content-product">{todo.content}</p>
                        </ProductStyle>
                    )
                }
            </ComponentProduct>
        </ComponentPage>
    );
}