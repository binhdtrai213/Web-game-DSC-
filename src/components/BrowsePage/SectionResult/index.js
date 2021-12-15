import React from 'react';
import { ComponentPage} from "./styles";

export const Result = () => {
   
    return(
        <ComponentPage>
            <div class='result'>
                <h2 style = {{color: 'white' }}>No result found !!!</h2>
            </div>
            <div class='more-details'>
                <p>Unfortunately I could not find any results matching your search. </p>
            </div>
        </ComponentPage>
    );
}