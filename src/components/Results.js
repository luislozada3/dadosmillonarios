import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const ResultsStyled = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--grey-light);
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
    @media screen and (min-width: 575px) {
        padding: 1.2em 2em;
        & .result-list{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 1em;
        }
        & .title-result {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 768px) {
        padding: 1.2em 5em;
        & .result-list{
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (min-width: 992px) {
        & .result-list{
            grid-template-columns: repeat(4, 1fr);
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
        </ResultsStyled>
    );
}

export default Results;