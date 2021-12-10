import React, { useState } from 'react';
import { Carousel } from 'antd';
import { Data } from './DummyData';
import { RemindOfAdd } from '../RemindAddCart/index';

import { ComponentPage, ImageStyle, ContentProduct } from './styles';

export const MeaninglessPath2 = () => {
    const data = Data;
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });
    const dataSlick = {
        dots: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

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
            <Carousel {...dataSlick}>
            {
                data.map(todo =>
                    <ContentProduct onClick={() => setIsRemind({
                        status: true,
                        product: todo,
                    })}>
                        <ImageStyle src={todo.linkImage} />
                        <p>{todo.name}</p>
                        <p className="content-product">{todo.content}</p>
                        <p>
                            {todo.price !== 0  
                                ? "₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                : "Free"
                            }
                        </p>
                    </ContentProduct>
                )
            }
            </Carousel>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
        </ComponentPage>
    );
}