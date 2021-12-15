import React from 'react';


import { GameOnSale } from './SectionBrowse/index';
import { Result } from './SectionResult/index';
import { Popular } from './SectionPopularGames/index';
import { SideBar } from './SectionFilter/index';

export const BrowsePage = ({ user }) => {
    
    return(
        <div>
            <Result />
            <GameOnSale />
            <SideBar />
            <Popular />
        </div>
    );
}