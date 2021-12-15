import React from 'react';
import { Carousel } from 'antd';

import { Data } from './DummyData';

import { ComponentPage, ImageStyle, ButtonStyle, ContentProduct, Title, ComponentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const GameOnSale = () => {
    const data = Data;
    let carousel = React.createRef();
    const dataSlick = {
        dots: window.matchMedia("(max-width: 600px)").matches ? true : false,
        speed: 500,
        slidesToShow: window.matchMedia("(max-width: 600px)").matches ? 3 : 5,
        slidesToScroll: window.matchMedia("(max-width: 600px)").matches ? 3 : 5,
    };
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
                        <ComponentProduct onClick={() => alert(todo.id)}>
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
        </ComponentPage>
    );
}