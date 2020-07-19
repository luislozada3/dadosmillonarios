import React from 'react';
import Wrapper from '../Wrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterStyle = styled.footer`
    box-sizing: border-box;
    padding: 2em 1em 2.5em;
    background-color: var(--dark-grey);
    & .content-footer {
        display: grid;
        width: 100%
        grid-template-rows: 300px auto auto auto;
        justify-items: center;
        text-align: center;
        grid-row-gap: 1em;
        color: var(--grey-light);
        .title-footer{
            display: none;
        }
        & .logo-footer{
            width: 250px;
            margin: 0px;
        }
        & .content-links {
            display: flex;
            flex-direction: column;
            & a {
                &:first-of-type {
                    margin-top: -0.5em;
                }
                text-decoration: none;
                color: var(--dark-blue);
                font-weight: 400;
                font-size: .9em;
                padding: .5em 0px;
                display: block;
                &:hover,
                &:active {
                    color: var(--blue);
                }
            }
        }
        & .social-container{
            width: 100%;
            display: flex;
            justify-content: center;
            & .socials{
                max-width: 300px;
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
        & .copy-right{
            color: var(--grey-light);
            font-weight: 300;
        }
    }
    @media screen and (min-width: 768px) {
        padding: 2em 1em;
        & .content-footer {
            grid-template-columns: 250px auto auto;
            grid-template-rows: auto auto;
            grid-column-gap: 1em;
            grid-template-areas: "logo links networks" 
                                 "logo copy copy";
            text-align: left;
            & .logo-footer{
                grid-area: logo;
            }
            & .content-links {
                grid-area: links;
                & .title-footer {
                    display: block;
                }
            }
            & .social-container{
                flex-direction: column;
                justify-content: flex-start;
                grid-area: networks;
                & .title-footer {
                    display: block;
                }
                & .socials {
                    justify-content: space-between;
                    & a {
                        margin-right: 1.5em;
                    }
                    & a:last-child {
                        margin-right: 0px;
                    }
                }
            }
            & .copy-right{
                grid-area: copy;
                text-align: center;
            }
        }
    }
`;

function Footer () {
    return (
        <FooterStyle>
            <Wrapper>
                <div className='content-footer'>
                    <img height='250' className='logo-footer' src={require('../../assets/images/logo2.png')} alt='logo' />

                    <div className='content-links'>
                        <h3 className='title-footer'>Enlaces</h3>
                        <Link to='./' className='link-polity'>Se parte de nosotros</Link>
                        <Link to='./' className='link-polity'>Condiciones del uso</Link>
                        <Link to='./' className='link-polity'>Politica de privacidad</Link>
                    </div>

                    <div className='social-container'>
                        <h3 className='title-footer'>Redes Sociales</h3>
                        <div className='socials'>
                            <a href='https://www.facebook.com/dadosmillonarios' title='@dadosmillonario' className='social-icon'>
                                <img height='30'  src={require('../../assets/images/sociales/facebook.png')} alt='facebook'/>
                            </a>
                            <a href='https://www.facebook.com/dadosmillonarios' title='@dadosmillonario' className='social-icon'>
                                <img height='30'  src={require('../../assets/images/sociales/instagram.png')} alt='instagram'/>
                            </a>
                            <a href='https://www.facebook.com/dadosmillonarios' title='@dadosmillonario' className='social-icon'>
                                <img height='30'  src={require('../../assets/images/sociales/twitter.png')} alt='twitter'/>
                            </a>
                            <a href='https://www.facebook.com/dadosmillonarios' title='@dadosmillonario' className='social-icon'>
                                <img height='30'  src={require('../../assets/images/sociales/youtube.png')} alt='youtube'/>
                            </a>
                        </div>
                    </div>

                    <p className='copy-right'> Todos los derechos reservados wwww.dadosmillonarios.com &copy; </p>
                </div>
            </Wrapper>
        </FooterStyle>
    );
}

export default Footer;