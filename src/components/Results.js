import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Card from './Card';

const ResultsStyled = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: var(--grey-light);
    & .content-results {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & .title-result{
            color: var(--grey);
            font-size: 1.6rem;
            margin-bottom: 1em;
        }
        & .result-item{
            color: var(--dark-grey);
            text-align: center;
            margin-bottom: 1.5em;
            font-size: 1.2em;
        }
    }
    @media screen and (min-width: 575px) {
        & .content-results {
            & .title-result {
                font-size: 2rem;
            }
            & .result-list{
                display: flex;
                justify-content: space-around;
                flex-flow: row wrap;
            }
        }
    }
`;

function Results () {
    const [results] = useState([
        {animal: "aguila", color: "negro", schedule: "08:00 AM"},
        {animal: "toro", color: "amarillo", schedule: "09:00 AM"},
        {animal: "perro", color: "rojo", schedule: "10:00 AM"},
        {animal: "perro", color: "blanco", schedule: "11:00 AM"},
        {animal: "ballena", color: "azul", schedule: "03:00 PM"},
        {animal: "vaca", color: "negro", schedule: "04:00 PM"},
        {animal: "alacran", color: "verde", schedule: "05:00 PM"},
        {animal: null, color: null, schedule: "07:00 PM"}
    ]);

    return (
        <ResultsStyled>
            <Wrapper>
                <div className='content-results'>
                    <h2 className='title-result'>Resultados del dia</h2>
                    <div className='result-list'>
                        { results.map( (result, index) => {
                            if (result.animal) {
                                return (
                                    <div key={index} className='result-item'> 
                                        {result.schedule}
                                        <Card animal={result.animal} color={result.color}/>
                                        {result.animal} / {result.color}
                                    </div>
                                );
                            }

                            return (
                                <div key={index} className='result-item'> 
                                    {result.schedule}
                                    <Card animal='sin resultados' color='grey'/>
                                    Sin resultado
                                </div>
                            );
                        } ) }
                    </div>
                </div>
            </Wrapper>
        </ResultsStyled>
    );
}

export default Results;