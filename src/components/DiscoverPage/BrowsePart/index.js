import React from "react";
import { Link } from "react-router-dom";

import { ComponentPage, ImageStyle, ContentStyle } from "./styles";

import ImageBrowse from "../../../assets/BrowsePart/egs-browsebreaker-no-cn.png"

export const BrowsePart = () => {
    return(
        <ComponentPage>
            <Link to="/Browse" onClick={() => window.scrollTo({top: 0, left: 0 })}>
                <ImageStyle src={ImageBrowse} />
            </Link>
            <ContentStyle>
                <div>
                    <p className="title">Browse</p>
                    <p className="content">Explore our catalog for your next favorite game!</p>
                    <Link to="/Browse" onClick={() => window.scrollTo({top: 0, left: 0 })}>
                        <button>LEARN MORE</button>
                    </Link>
                </div>
            </ContentStyle>
        </ComponentPage>
    );
}