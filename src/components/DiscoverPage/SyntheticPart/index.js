import React from "react";

import { Data } from "./DummyData";
import { Carousel } from "antd";

import { ComponentPage, ImageStyle, ProductStyle } from "./styles";
import "antd/dist/antd";

export const SyntheticPart = () => {
    const data = Data;
    const props = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    
    const ContentComponent = 
        data.map(todo => 
            <div className={`column${todo.id}`}>
                <p className={"title"}>{todo.title}</p>
                {
                    todo.product.map(newTodo => <ProductStyle>
                        <ImageStyle src={newTodo.linkImage} />
                        <div className="content">
                            <p>{newTodo.name}</p>
                            {todo.id !== 3 && <span>
                                {newTodo.price !== 0  
                                    ? "₫ " + newTodo.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                    : "Free"
                                }
                            </span>}
                        </div>
                    </ProductStyle>
                    )
                }
            </div>
        )

    return (
        <ComponentPage>
            {window.matchMedia("(max-width: 800px)") 
                ? <Carousel {...props}>{ContentComponent}</Carousel>
                : <div className="media-bigger-than-800px">{ContentComponent}</div>
            }
                
        </ComponentPage>
    );
}