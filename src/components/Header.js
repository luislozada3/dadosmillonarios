import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const StyleHeader = styled.header`
    box-shadow: 0px 0px 6px 1px #9e9e9e;
    margin-bottom: 1em;
    padding: 1em 0px;
    background-color: #FFFFFF;
    & .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .icon-menu{
            height: 20px;
        }
    }
`;

function Header () {
    return (
        <StyleHeader>
            <Wrapper>
                <div className='header-content'>
                    <a href='./' className='link-logo'> 
                        <img height='40' width='75' src={require('../assets/images/logo-letras.png')} alt='logo' className='link-logo-image'/>
                    </a>
                    <img src={require('../assets/images/icon-hamburger.svg')} className='icon-menu' alt='icon-hamburger'/>
                </div>
            </Wrapper>
        </StyleHeader>
    );
}

export default Header;