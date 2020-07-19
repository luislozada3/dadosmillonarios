import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';
import { NavLink, Link } from 'react-router-dom';

const StyleHeader = styled.header`
    box-shadow: 0px 0px 6px 1px #9e9e9e;
    margin-bottom: 1em;
    padding: 1em 0px;
    background-color: #FFFFFF;
    & .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .content-menu {
            & .icon-menu{
                height: 20px;
            }
            & .header-navegation {
                display: none;
            }
            @media screen and (min-width: 768px) {
                & .icon-menu{
                    display: none
                }
                & .header-navegation {
                    display: block;
                    & .menu {
                        list-style: none;
                        padding: 0px;
                        margin: 0px;
                        display: flex;
                        & .menu-item {
                            margin: 0px .4em;
                            &:firt-of-type {
                                margin-left: 0px;
                            }
                            & a {
                                text-decoration: none;
                                color: var(--grey);
                                font-weight: 400;
                                padding: .4em .6em;
                                display: block;
                                &:hover,
                                &:active {
                                    color: var(--blue);
                                    font-weight: 700;
                                }
                            }
                        }
                    }
                }   
            }
        }
    }
`;

function Header () {
    return (
        <StyleHeader>
            <Wrapper>
                <div className='header-content'>
                    <Link to='./' className='link-logo'> 
                        <img height='40' width='75' src={require('../../assets/images/logo-letras.png')} alt='logo' className='link-logo-image'/>
                    </Link>
                    <div className='content-menu'>
                        <img src={require('../../assets/images/icon-hamburger.svg')} id='icon-menu' className='icon-menu' alt='icon-hamburger'/>
                        <nav className='header-navegation'>
                            <ul className='menu'>
                                <li className='menu-item'>
                                    <NavLink to='/contact' activeClassName="selectedLink"> Cont&aacute;ctanos </NavLink>
                                </li>
                                <li className='menu-item'>
                                    <NavLink to='/results' activeClassName="selectedLink"> Resultados de animalitos</NavLink>
                                </li>
                                <li className='menu-item'>
                                    <NavLink to='/forecast' activeClassName="selectedLink"> Pron&oacute;sticos </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Wrapper>
        </StyleHeader>
    );
}

export default Header;