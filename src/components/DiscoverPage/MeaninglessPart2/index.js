import React from 'react';

import { Data } from './DummyData';

import { ComponentPage, ImageStyle, ContentProduct } from './style';

export const MeaninglessPath2 = () => {
    const data = Data;
    return(
        <ComponentPage>
            {data.map(todo =>
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
            )}
        </ComponentPage>
    );
}