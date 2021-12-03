import React from 'react';
import { Carousel } from 'antd';

import { BannerData } from './DummyData';

import { ComponentBanner, ImageStyle, ButtonNext, ButtonPrev, ContentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const Banner = () => {
    let carousel = React.createRef();
    const props = {
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

            <Carousel ref={(node) => (carousel = node)} {...props}>
                {
                    BannerData.map(todo =>
                        <div>
                            <ImageStyle src={todo.linkImage} />
                            <ContentProduct>
                                <p>{todo.content}</p>
                                <span>
                                    {todo.price !== 'Free' && <span>Starting at ₫</span>}
                                    {todo.price}
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