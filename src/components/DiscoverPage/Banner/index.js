import React from 'react';
import { Carousel } from 'antd';

import { BannerData } from './DummyData';

import { ComponentBanner, ImageStyle, ButtonNext, ButtonPrev, ContentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const Banner = () => {
    const data = BannerData;
    let carousel = React.createRef();
    const dataSlick = {
        autoplay: true,
        autoplaySpeed: 5000, //5000
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <ComponentBanner>
            <ButtonPrev onClick={() => carousel.prev()}>
                <LeftOutlined />
            </ButtonPrev>

            <ButtonNext onClick={() => carousel.next()}>
                <RightOutlined />
            </ButtonNext>

            <Carousel ref={(node) => (carousel = node)} {...dataSlick}>
                {
                    data.map(todo =>
                        <div>
                            <ImageStyle src={todo.linkImage} />
                            <ContentProduct>
                                <p>{todo.content}</p>
                                <span>
                                    {todo.price > 0 && <span>Starting at</span>}
                                    {todo.price > 0  
                                        ? " ₫ " + todo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                        : "Free"
                                    }
                                </span>
                                <button>BUY NOW</button>
                            </ContentProduct>
                        </div>
                    )
                
                }
            </Carousel>
        </ComponentBanner>
    );
}