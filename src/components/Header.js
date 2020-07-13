import React from 'react';
import styled from 'styled-components';

const StyleHeader = styled.header`
    box-sizing: border-box;
    padding: 0.5em 1.2em;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 6px 1px #9e9e9e;
    margin-bottom: 1em;
    & .link-logo {
        text-decoration: none;
    }
    & .icon-menu{
        height: 15px;
    }
    @media screen and (min-width: 575px) {
        padding-left: 2em;
        padding-right: 2em;
    }
    @media screen and (min-width: 768px) {
        padding-left: 5em;
        padding-right: 5em;
    }
`;

function Header () {
    return (
        <StyleHeader>
            <a href='./' className='link-logo'> 
                <img height='40' width='75' src={require('../assets/images/logo-letras.png')} alt='logo' className='link-logo-image'/>
            </a>
            <img src={require('../assets/images/icon-hamburger.svg')} className='icon-menu' alt='icon-hamburger'/>
        </StyleHeader>
    );
}

export default Header;