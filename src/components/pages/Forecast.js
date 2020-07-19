import React, { useState} from "react"
import styled from "styled-components"
import Wrapper from '../Wrapper';
import AnimalForecast from '../AnimalForecast';

const StyledForecast = styled.div`
    width: 100%;
    & .info-content {
        padding-bottom: 1em;
        border-bottom: 1px solid var(--grey-light);
        & .title {
            font-size: 2em;
            font-weight: 700;
            margin: 1em 0px;
            color: var(--dark-grey);
        }
        & .info {
            font-size: 1em;
            font-weight: 300;
            color: var(--grey);
            margin-bottom: 1em;
            max-width: 768px;
        }
    }
    & .forecast-content{
        padding-bottom: 1em;
        & .forecast-title {
            font-size: 1em;
            font-weight: 300;
            margin: 1em 0px;
            color: var(--grey);
        }
    }
    @media screen and (min-width: 768px) {
        & .info-content {
            & .title {
                font-size: 2.5em;
            }
            & .info {
                font-size: 1.2em;
            }
        }
        & .forecast-content{
            & .forecast-title {
                font-size: 1.2em;
            }
        }
    }
`;

function Forecast () {
    const [lotteries] = useState(
        [
            {
                title: "Lotto Activo",         
                morning: ['toro', 'vaca', 'aguila', 'alacran'],
                afternoon: ['ballena', 'vaca', 'perro', 'alacran']
            },
            {
                title: "Ruleta Activa",
                morning: ['perro', 'ballena', 'aguila', 'toro'],
                afternoon: ['toro', 'alacran', 'aguila', 'vaca']
            },
            {
                title: "La Gran Ruleta",
                morning: ['alacran', 'vaca', 'aguila', 'perro'],
                afternoon: ['perro', 'toro', 'alacran', 'aguila'] 
            },
        ]
    );
    const colors = [{
        initial: "#e66465",
        final: "#9198e5"
    },
    {
        initial: "#43a047",
        final: "#00acc1"
    },
    {
        initial: "#ffb300",
        final: "#d81b60"
    }];

    return (
        <StyledForecast>
            <Wrapper>
                <div className='info-content'>
                    <h1 className='title'>Pron&oacute;sticos para animalitos</h1>
                    <p className='info'>
                        Consulta muy fácil los Datos de las Loterías de Animalitos Lotto Activo, Ruleta Activa y La Granjita basados en las estadísticas del Top de Animalitos sin salir y los que mas han salido.
                    </p>
                </div>
                <div className='forecast-content'>
                    <h2 className='forecast-title'>Pronosticos del dia de hoy 18-07-2020</h2>
                    <div className='forecast'>
                        { lotteries.map( (lotterie, index) => {
                            return <AnimalForecast key={index} title={lotterie.title} morning={lotterie.morning} afternoon={lotterie.afternoon} colors={colors[index]}/>;
                        })}

                    </div>
                </div>
            </Wrapper>
        </StyledForecast>
    );
}

export default Forecast;