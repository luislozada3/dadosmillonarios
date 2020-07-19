import React from "react"
import styled from "styled-components"

const StyledCardForecast = styled.div`
    max-width: 110px;
    box-shadow: 0px 0px 3px 1px var(--grey);
    overflow: hidden;
    padding: .3em .1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px 8px 5px 0px;
    border-radius: 2px;
    background: linear-gradient(${props => props.colors.initial } , ${props => props.colors.final });
    & img {
        width: 60px;
        margin-bottom: .3em;
    }
    & span {
        font-weight: 700;
        font-size: .75em;
        color: (--grey);
        margin-bottom: .3em;
        &:first-letter {
            text-transform: uppercase;
        }
    }
`;

function CardForecast ( { animal, colors } ) {
    return (
         <StyledCardForecast colors={colors}>
            <img height={'60px'} src={require(`../assets/images/animales/${animal}.png`)} alt={animal}/>
            <span>{animal}</span>
         </StyledCardForecast>
    );
}

export default CardForecast;