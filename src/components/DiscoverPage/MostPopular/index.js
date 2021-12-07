import React from "react";

import { Data } from "./DummyData";

import { ImageStyle, ComponentPage, ContentProduct, ComponentProduct } from "./styles";


export const MostPopular = () => {
    const data = Data; 

    const ContentComponent = () => {
        const count = window.matchMedia(window.matchMedia("(max-width: 768px)")).matches ? 4 : 5;
        return(
            data.map((todo, id) => id < count &&
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
        );
    }
    return(
        <ComponentPage>
            <p className="title" >Most Popular</p>
            <ComponentProduct>
                {ContentComponent()}
            </ComponentProduct>
        </ComponentPage>
    );
}