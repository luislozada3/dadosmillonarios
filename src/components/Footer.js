import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    box-sizing: border-box;
    padding: 1.2em;
    background-color: var(--dark-grey);
    display: grid;
    grid-template-rows: 200px auto 40px auto; 
    justify-items: center;
    text-align: center;
    grid-row-gap: 1em;
    color: var(--grey-light);
    .title-footer{
        display none;
    }
    & .logo-footer{
        width: 200px;
        margin: 0px;
    }
    & .content-polity {
        display: flex;
        flex-direction: column;
        & a {
            text-decoration: none;
            color: #01579b;
            font-weight: 400;
            font-size: .9em;
            margin-bottom: 1em;
            border-radius: 5px;
        }
    }
    & .social-container{
        width: 100%;
        max-width: 400px;
        & .socials{
            display: flex;
            justify-content: space-around;
        }
    }
    & .copy-right{
        color: var(--grey-light);
        font-weight: 300;
    }
    @media screen and (min-width: 575px) {
        padding-left: 2em;
        padding-right: 2em;
    }
    @media screen and (min-width: 768px) {
        padding-left: 5em;
        padding-right: 5em;
        grid-template-columns: 200px minmax(250px, 1fr) minmax(1fr, 100px);
        grid-template-rows: 100px auto;
        grid-row-gap: 3em;
        grid-column-gap: 1em;
        grid-template-areas: "logo polity networks" 
                             "logo copy copy";
        text-align: left;
        justify-items: center;
        justify-content: center;
        .title-footer{
            display block;
        }
        & .logo-footer{
            grid-area: logo;
        }
        & .content-polity {
            grid-area: polity;
        }
        & .social-container{
            grid-area: networks;
            & .socials {
                justify-content: flex-start;
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
        }
    }
`;

function Footer () {
    return (
        <FooterStyle>
            <img height='200' className='logo-footer' src={require('../assets/images/logo2.png')} alt='logo' />

            <div className='content-polity'>
                <h3 className='title-footer'>Enlaces</h3>
                <a href='./' className='link-polity'>Se parte de nosotros</a>
                <a href='./' className='link-polity'>Condiciones del uso</a>
                <a href='./' className='link-polity'>Politica de privacidad</a>
            </div>

            <div className='social-container'>
                <h3 className='title-footer'>Redes Sociales</h3>
                <div className='socials'>
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

            <p className='copy-right'> &copy; wwww.dadosmillonarios.com</p>
        </FooterStyle>
    );
}

export default Footer;