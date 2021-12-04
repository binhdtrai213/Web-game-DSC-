import React from "react";

import { Data } from "./DummyData";

import { ImageStyle, ComponentPage, ContentProduct, ComponentProduct } from "./styles";


export const RecentlyUpdated = () => {
    const data = Data; 

    return(
        <ComponentPage>
            <p style={{ fontSize: '25px' }} >Recently Updated</p>
            <ComponentProduct>
                {
                    data.map(todo =>
                        <div>
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
                }
            </ComponentProduct>
        </ComponentPage>
    );
}