import React from 'react';

import {
    Nav,
    NavDiv,
    HomeLink,
    Logo,
    LogoWide,
    NavGroup,
    NavGroupDiv,
    NavIconLink,
    NavMenuBtn,
} from './style';
import logo0Png from '../../public/images/logo0.png';
import logo1Png from '../../public/images/logo1.png';
import menuSvg from '../../public/images/menu.svg';


const NAV_ITEMS = [
    {
        text: 'WELCOME',
        url: '/',
    }, {
        text: 'ABOUT',
        url: 'about/',
    }, {
        text: 'PROJECTS',
        url: 'projects/',
    }, {
        text: 'TAIHE CARE',
        url: 'care/',
    }, {
        text: 'CONTACT US',
        url: 'contact/',
    },
];

export const Navbar = () => <Nav>
    <NavDiv>
        <HomeLink to={NAV_ITEMS[0].url}>
            <LogoWide src={logo0Png} alt="TaiHe Logo" />
            <Logo src={logo1Png} alt="TaiHe Logo" />
        </HomeLink>
        <NavGroupDiv>
            <NavMenuBtn src={menuSvg} alt="Menu Icon"
                tabIndex="1" />
            <NavGroup>
                {NAV_ITEMS.map(({ text, url }) => <NavIconLink key={text} to={url}>
                    {text}
                </NavIconLink>)}
            </NavGroup>
        </NavGroupDiv>
    </NavDiv>
</Nav>;
