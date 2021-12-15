import React from "react";

import { Data } from "./DummyData";

import { ImageStyle, ComponentPage, ContentProduct, ComponentProduct, ImageProduct } from "./styles";


export const Popular = () => {
    const data = Data; 

    const ContentComponent = () => {
        const count = window.matchMedia(window.matchMedia("(max-width: 768px)")).matches ? 4 : 5;
        return(
            data.map((todo, id) => id < count &&
                <ImageProduct>
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
            </ImageProduct>
            )
        );
    }
    return(
        <ComponentPage>
            <p className="title" >Recently Updated</p>
            <ComponentProduct>
                {ContentComponent()}
            </ComponentProduct>
        </ComponentPage>
    );
}