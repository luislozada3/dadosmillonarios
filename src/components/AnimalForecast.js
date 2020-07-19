import React from 'react';
import styled from 'styled-components';
import CardForecast from './CardForecast';

const StyledAnimalForecast = styled.div`
    padding: 1em 0px;
    width: 100%;
    border-bottom: 1px solid var(--grey-light);
    & .animal-forecast-title {
        font-size: 1.5em;
        color: var(--dark-grey);
        font-weight: 700;
        font-style: oblique;
    }
    & .p-schedule {
        font-size: .9em;
        color: var(--grey);
        font-weight: 400;
    }
    & .list-card-forecast {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        & > div:last-of-type {
            margin-right: 0px;
        }
    }
`;

function AnimalForecast ({title, morning, afternoon, colors}) {
    return (
        <StyledAnimalForecast>
            <h3 className='animal-forecast-title'> {title} </h3>
            <p className='p-schedule'>Mañana</p>
            <div className='list-card-forecast'>
                { morning.map( (animal, index) => <CardForecast key={index} animal={animal} colors={colors} />)}
            </div>
            <p className='p-schedule'>Tarde</p>
            <div className='list-card-forecast'>
                { afternoon.map( (animal, index) => <CardForecast key={index} animal={animal} colors={colors} />)}
            </div>
        </StyledAnimalForecast>
    );
}

export default AnimalForecast;