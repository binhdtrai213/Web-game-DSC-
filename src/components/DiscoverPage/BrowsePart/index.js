import React from "react";

import { ComponentPage, ImageStyle, ContentStyle } from "./styles";

import ImageBrowse from "../../../assets/BrowsePart/egs-browsebreaker-no-cn.png"

export const BrowsePart = () => {
    return(
        <ComponentPage>
            <ImageStyle src={ImageBrowse} />
            <ContentStyle>
                <div>
                    <p className="title">Browse</p>
                    <p className="content">Explore our catalog for your next favorite game!</p>
                    <button>LEARN MORE</button>
                </div>
            </ContentStyle>
        </ComponentPage>
    );
}