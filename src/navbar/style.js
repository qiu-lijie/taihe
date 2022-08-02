import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { MAX_WIDTH } from '../style';


export const Nav = styled.nav`
    width: 100vw;
    height: var(--nav-height);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
`;

export const NavDiv = styled.div`
    height: var(--nav-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${MAX_WIDTH} {
        justify-content: center;
    }
`;

export const HomeLink = styled(Link)`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: calc(var(--nav-height) * 0.8);
    padding: 0 2rem;
`;

export const LogoWide = styled(Logo)`
    position: absolute;
    @media ${MAX_WIDTH} {
        display: none;
    }
`;

export const Icon = styled.div`
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const NavMenuBtn = styled(Icon).attrs({
    as: 'img'
})`
    display: none;
    width: 30px;
    height: 30px;
    @media ${MAX_WIDTH} {
        display: block;
        position: fixed;
        right: 1rem;
        top: 1rem;
    }
`;

export const NavGroupDiv = styled.div``;

export const NavGroup = styled.div`
    display: flex;
    @media ${MAX_WIDTH} {
        flex-direction: column;
        width: 0;
        overflow: hidden;
        height: 100vh;
        background-color: var(--navbar);
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        transition: width 200ms ease;
        ${NavGroupDiv}:focus-within & {
            width: 45vw;
        }
    }
`;

export const NavIconLink = styled(NavLink)`
    color: var(--navbar);
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover{
        opacity: .8;
    }
    &::after {
        content: '|';
        padding: 0 1rem;
    }
    &:last-child::after {
        content: '';
    }
    @media ${MAX_WIDTH} {
        color: var(--primary);
        padding: .5rem;
        margin: .5rem;
        &::after {
            content: '';
        }
    }
`;
