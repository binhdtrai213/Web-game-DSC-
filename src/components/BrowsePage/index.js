import React from 'react';


import { GameOnSale } from './SectionBrowse/index';
import { Result } from './SectionResult/index';
import { Popular } from './SectionPopularGames/index';
import { SideBar } from './SectionFilter/index';

export const BrowsePage = () => {
    
    return (
        <div className="BrowsePage">
            <Result />
            <GameOnSale />
            <SideBar />
            <Popular />
        </div>
    );
}