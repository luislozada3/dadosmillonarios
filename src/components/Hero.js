import React from 'react';
import styled from 'styled-components';
import imgLogo from '../assets/images/logo.png';
import Wrapper from './Wrapper';

const StyleHero = styled.div`
    width: 100%;
    padding: 2.5em 0px;
    & .hero-content {
        display: grid;
        justify-content: center;
        align-items: center;
        grid-template-rows: repeat(2, auto);
        grid-row-gap: 2em;
        & .hero-container-images {
            & .hero-image {
                height: 300px;
                background: url(${imgLogo}) no-repeat center;
                background-size: contain;
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
            margin-bottom: 1em;
            & h1 {
                max-width: 460px;
                font-weight: bold;
                font-size: 2em;
                line-height: 1em;
                color: var(--dark-grey);
                margin: 0px;
                margin-bottom: 0.5em;
            }
            & .hero-copy {
                max-width: 460px;
                font-weight: 500;
                color: var(--grey);
                margin: 0px;
            }
        }
    }
    @media screen and (min-width: 768px) {
        & .hero-content {
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 1em;
            grid-template-areas: "hero-text hero-images";
            & .hero-text {
                grid-area: hero-text;
                & .hero-title {
                    font-size: 2.5em;
                }
                & .hero-copy {
                    font-size: 1.5em;
                }
            }
            & .hero-container-images {
                grid-area: hero-images;
            }
        }
    }
    @media screen and (min-width: 992px) {
        & .hero-content {
            & .hero-text {
                & .hero-title {
                    font-size: 2.8em;
                }
            }
        }
    }
`;

function Hero () {
    return (
        <StyleHero>
            <Wrapper>
                <div className='hero-content'>
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
                </div>
            </Wrapper>
        </StyleHero>
    );
}

export default Hero;