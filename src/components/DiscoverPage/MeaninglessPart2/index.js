import React from 'react';
import { Carousel } from 'antd';
import { Data } from './DummyData';

import { ComponentPage, ImageStyle, ContentProduct } from './styles';

export const MeaninglessPath2 = () => {
    const data = Data;
    const dataSlick = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <ComponentPage>
            {window.matchMedia("(max-width: 600px)").matches 
                ? <Carousel {...dataSlick}>
                    {
                        data.map(todo =>
                            <ContentProduct>
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
                :<div className="media-bigger-than-600px">
                    {
                        data.map(todo =>
                            <ContentProduct>
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
                </div>
            }
        </ComponentPage>
    );
}