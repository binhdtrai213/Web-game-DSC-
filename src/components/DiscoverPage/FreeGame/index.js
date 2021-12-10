import React, { useState } from "react";

import { Data } from "./DummyData";
import { RemindOfAdd } from '../RemindAddCart/index';

import { ImageStyle, ComponentPage, ProductStyle, Title, ComponentProduct } from "./styles";

import { GiftOutlined } from "@ant-design/icons";

export const FreeGame = () => {
    const data = Data; 
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });

    const changeDataCart = (kind) => {
        if(kind === 1) {
            let ok = true;
            let dataCart = JSON.parse(localStorage.getItem('user123'));
            for(let i = 0; i < dataCart.length; i++) {
                if(dataCart[i].name === isRemind.product.name)
                    ok = false;
            }
            if(ok) localStorage.setItem('user123', JSON.stringify([...dataCart, isRemind.product]));
        }
        setIsRemind({
            status: false,
            product: {},
        });
    }

    return(
        <ComponentPage>
            <Title>
                <GiftOutlined className="icon-gift"/>
                <span className="title">Free Games</span>
            </Title>
            <ComponentProduct>
                {
                    data.map(todo => 
                        <ProductStyle onClick={() => setIsRemind({
                            status: true,
                            product: todo,
                        })}>
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
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
        </ComponentPage>
    );
}