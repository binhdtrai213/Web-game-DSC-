import React, { useState } from 'react';
import { Carousel } from 'antd';

import { BannerData } from './DummyData';
import { RemindOfAdd } from '../RemindAddCart/index';
import { RemindNotExist } from '../RemindGameNotExist/index';
 
import { ComponentBanner, ImageStyle, ButtonNext, ButtonPrev, ContentProduct } from './styles';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export const Banner = () => {
    const data = BannerData;
    const [isExist, setIsExist] = useState(false);
    const [isRemind, setIsRemind] = useState({
        status: false,
        product: {},
    });
    let carousel = React.createRef();
    const dataSlick = {
        autoplay: true,
        autoplaySpeed: 5000, //5000
        pauseOnHover: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    const changeExistStatus = () => {
        setIsExist(false);
    }

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
                                <button onClick={() => setIsRemind({
                                    status: true,
                                    product: todo,
                                })}>BUY NOW</button>
                            </ContentProduct>
                        </div>
                    )
                
                }
            </Carousel>
            {isRemind.status && <RemindOfAdd changeDataCartFunc={changeDataCart} />}
            {isExist && <RemindNotExist changeExistStatusFunc={changeExistStatus} />}
        </ComponentBanner>
    );
}