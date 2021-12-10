import React, { useState } from "react";

import { Data } from "./DummyData";
import { RemindOfAdd } from '../RemindAddCart/index';

import { ImageStyle, ComponentPage, ContentProduct, ComponentProduct } from "./styles";


export const RecentlyUpdated = () => {
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
    const ContentComponent = () => {
        const count = window.matchMedia("(max-width: 768px)").matches ? 4 : 5;
        return(
            data.map((todo, id) => id < count &&
                <div onClick={() => setIsRemind({
                    status: true,
                    product: todo,
                })}>
                    <ImageStyle src={todo.linkImage} />
                    <ContentProduct>
                        <p className="name-product">{todo.name}</p>
                        <p className="content-product">{todo.content}</p>
                        <p>
                            {todo.price !== 0  
                                ? "₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : "Free"
                            }
                        </p>
                    </ContentProduct>
                </div>
            )
        );
    }
    return(
        <ComponentPage>
            <p className="title" >Most Popular</p>
            <ComponentProduct>
                {ContentComponent()}
            </ComponentProduct>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
        </ComponentPage>
    );
}