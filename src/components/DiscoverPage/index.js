import React from 'react';
import { Banner } from './Banner/index';
import { GameOnSale } from './GameOnSale/index';
import { MeaninglessPath1 } from './MeaninglessPart1/index';
import { MeaninglessPath2 } from './MeaninglessPart2/index';
import { FreeGame } from './FreeGame/index';
import { SyntheticPart } from './SyntheticPart/index';

export const DiscoverPage = () => {
    
    return(
        <div>
            <Banner />
            <GameOnSale />
            <MeaninglessPath1 />
            <FreeGame />
            <SyntheticPart />
            <MeaninglessPath2 />
        </div>
    );
}