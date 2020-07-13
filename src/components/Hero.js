import React from 'react';
import styled from 'styled-components';
import imgLogo from '../assets/images/logo.png';

const StyleHero = styled.div`
    width: 100%;
    padding: 1.2em;
    box-sizing: border-box;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: repeat(2, auto);
    & .hero-container-images {
        margin-bottom: 2em;
        & .hero-image {
            height: 350px;
            margin: 0 -1.2em;
            background: url(${imgLogo}) no-repeat center;
            background-size: calc(350px - 2.4em);
            margin-bottom: 0.5em;
        }
        & .social-container{
            display: flex;
            justify-content: space-around;
            a {
                text-decoration: none;
            }
        }
    }
    & .hero-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        & h1 {
            max-width: 460px;
            font-weight: bold;
            font-size: 2em;
            line-height: 1em;
            color: var(--dark-grey);
            margin: 0px;
            margin-bottom: 0.3em;
        }
        & .hero-copy {
            max-width: 460px;
            font-weight: 500;
            color: var(--grey);
            margin: 0px;
            margin-bottom: 1em;
        }
    }
    @media screen and (min-width: 575px) {
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 1em;
        grid-template-areas: "hero-text hero-images";
        padding: 1.25em 2em;
        & .hero-text {
            align-items: flex-end;
            grid-area: hero-text;
        }
        & .hero-container-images {
            grid-area: hero-images;
            & .hero-image {
                margin: 0 -2em;
                background-size: calc(350px - 2em);
            }
        }
    }
    @media screen and (min-width: 768px) {
        padding: 2.5em 5em;
        & .hero-text {
            align-items: flex-end;
            & .hero-title {
                font-size: 2.5em;
            }
            & .hero-copy {
                font-size: 1.5em;
            }
        }
    }
    @media screen and (min-width: 992px) {
        & .hero-container-images {
            & .hero-image {
                background-size: 360px;
            }
        }
        & .hero-text {
            align-items: flex-end;
            & .hero-title {
                font-size: 2.8em;
            }
        }
    }
`;

function Hero () {
    return (
        <StyleHero>
            <div className='hero-container-images'>
                <div className='hero-image'></div>
                <div className='social-container'>
                    <a href='https://www.facebook.com/dadosmillonarios' target='__blank' className="social-icon">
                        <img height='30'  src={require('../assets/images/sociales/facebook.png')} alt='facebook'/>
                    </a>
                    <a href='https://www.facebook.com/dadosmillonarios' className="social-icon">
                        <img height='30'  src={require('../assets/images/sociales/instagram.png')} alt='instagram'/>
                    </a>
                    <a href='https://twitter.com/dadosmillonario?lang=es' className="social-icon">
                        <img height='30'  src={require('../assets/images/sociales/twitter.png')} alt='twitter'/>
                    </a>
                    <a href='https://www.facebook.com/dadosmillonarios' className="social-icon">
                        <img height='30'  src={require('../assets/images/sociales/youtube.png')} alt='youtube'/>
                    </a>
                </div>
            </div>
            <div className='hero-text'>
                <h1 className='hero-title'>Piensa en millonario gana en millonario</h1>
                <p className='hero-copy'>Juega con nosotros y gana en grande con los dados de la suerte</p>
            </div>
        </StyleHero>
    );
}

export default Hero;