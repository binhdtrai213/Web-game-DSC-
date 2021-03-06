import React, { useState } from 'react';

import { Banner } from './Banner/index';
import { GameOnSale } from './GameOnSale/index';
import { MeaninglessPath1 } from './MeaninglessPart1/index';
import { MeaninglessPath2 } from './MeaninglessPart2/index';
import { FreeGame } from './FreeGame/index';
import { SyntheticPart } from './SyntheticPart/index';
import { RecentlyUpdated } from './RecentlyUpdated/index';
import { MostPopular } from './MostPopular/index';
import { BrowsePart } from './BrowsePart/index';


export const DiscoverPage = () => {
    
    return (
        <div className="DiscoveryPage">
            <Banner />
            <GameOnSale />
            <MeaninglessPath1 />
            <FreeGame />
            <SyntheticPart />
            <MeaninglessPath2 />
            <RecentlyUpdated />
            <MostPopular />
            <BrowsePart />
        </div>
    );
}