import React, { useState } from 'react';
import { Carousel } from 'antd';

import { Data } from './DummyData';
import { RemindOfAdd } from '../RemindAddCart/index';

import { ComponentPage, ImageStyle, ButtonStyle, ContentProduct, Title, ComponentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const GameOnSale = () => {
    const data = Data;
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });
    let carousel = React.createRef();
    const dataSlick = {
        dots: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 600,
                settings: 
                {
                    dot: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ],
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
            <Title>
                <p>Games On Sale</p>
                <div className="button-prev-next">
                    <ButtonStyle onClick={() => carousel.prev()}>
                        <LeftOutlined/>
                    </ButtonStyle>
                    <ButtonStyle onClick={() => carousel.next()}>
                        <RightOutlined />
                    </ButtonStyle>
                </div>
            </Title>

            <Carousel ref={(node) => (carousel = node)} {...dataSlick}>
                {
                    data.map(todo =>
                        <ComponentProduct onClick={() => setIsRemind({
                                status: true,
                                product: todo,
                            })}>
                            <ImageStyle src={todo.linkImage} />
                            <ContentProduct>
                                <p>{todo.name}</p>
                                <p style={{ opacity: '0.5' }}>{todo.content}</p>
                                <p>
                                    {todo.price !== 0  
                                        ? "₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                        : "Free"
                                    }
                                </p>
                            </ContentProduct>
                        </ComponentProduct>
                    )
                }
            </Carousel>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
        </ComponentPage>
    );
}