import React from "react";

import { Data } from "./DummyData";

import { ComponentPage, ImageStyle, ProductStyle } from "./style";

export const SyntheticPart = () => {
    const data = Data;

    return (
        <ComponentPage>
                {data.map(todo => 
                <div className={`column${todo.id}`}>
                    <p className={"title"}>{todo.title}</p>
                    {todo.product.map(newTodo => <ProductStyle>
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
                    )}
                </div>
                )}
        </ComponentPage>
    );
}