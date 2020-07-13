import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    max-width: 400px;
    border-radius: 5px;
    box-shadow: 0px 0px 6px 1px #9e9e9e;
    overflow: hidden;
    padding: 0px;
    box-sizing: border-box;
    display: flex;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    background: ${props => props.color};
`;

function Card ({animal, color}) {
    const colors = {
        verde: "#81c784",
        azul: "#29b6f6",
        negro: "#010101",
        rojo: "#e53935",
        blanco: "#f9f9f9",
        amarillo: "#ffcc66",
        grey: '#CCCCCC'
    };

    return (
        <CardStyled color={colors[color]}>
            <img height='220' width='220' src={require(`../assets/images/animales/${animal}.png`)} alt={`${animal}-${color}`} />
        </CardStyled>
    );
}

export default Card;