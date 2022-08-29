import React, { useState } from 'react';
import { Grid, GridItem, ProjThumbnail } from './style';
import { Portal } from '../core/Portal';
import { ModalBackground, ModalContent, CloseBtn } from '../core/style';
import { Carousel } from '../core/Carousel';

import proj00Jpg from '../../public/images/proj0/0.jpg';
import proj01Jpg from '../../public/images/proj0/1.jpg';
import proj02Jpg from '../../public/images/proj0/2.jpg';
import proj03Jpg from '../../public/images/proj0/3.jpg';

import proj10Jpg from '../../public/images/proj1/0.jpg';
import proj11Jpg from '../../public/images/proj1/1.jpg';
import proj12Jpg from '../../public/images/proj1/2.jpg';
import proj13Jpg from '../../public/images/proj1/3.jpg';
import proj14Jpg from '../../public/images/proj1/4.jpg';
import proj15Jpg from '../../public/images/proj1/5.jpg';

import proj20Jpg from '../../public/images/proj2/0.jpg';
import proj21Jpg from '../../public/images/proj2/1.jpg';
import proj22Jpg from '../../public/images/proj2/2.jpg';
import proj23Jpg from '../../public/images/proj2/3.jpg';
import proj24Jpg from '../../public/images/proj2/4.jpg';
import proj25Jpg from '../../public/images/proj2/5.jpg';
import proj26Jpg from '../../public/images/proj2/6.jpg';
import proj27Jpg from '../../public/images/proj2/7.jpg';

import proj30Jpg from '../../public/images/proj3/0.jpg';
import proj31Jpg from '../../public/images/proj3/1.jpg';
import proj32Jpg from '../../public/images/proj3/2.jpg';
import proj33Jpg from '../../public/images/proj3/3.jpg';
import proj34Jpg from '../../public/images/proj3/4.jpg';
import proj35Jpg from '../../public/images/proj3/5.jpg';
import proj36Jpg from '../../public/images/proj3/6.jpg';
import proj37Jpg from '../../public/images/proj3/7.jpg';

import proj40Jpg from '../../public/images/proj4/0.jpg';
import proj41Jpg from '../../public/images/proj4/1.jpg';
import proj42Jpg from '../../public/images/proj4/2.jpg';
import proj43Jpg from '../../public/images/proj4/3.jpg';
import proj44Jpg from '../../public/images/proj4/4.jpg';
import proj45Jpg from '../../public/images/proj4/5.jpg';
import proj46Jpg from '../../public/images/proj4/6.jpg';
import proj47Jpg from '../../public/images/proj4/7.jpg';

import proj50Jpg from '../../public/images/proj5/0.jpg';
import proj51Jpg from '../../public/images/proj5/1.jpg';
import proj52Jpg from '../../public/images/proj5/2.jpg';
import proj53Jpg from '../../public/images/proj5/3.jpg';
import proj54Jpg from '../../public/images/proj5/4.jpg';
import proj55Jpg from '../../public/images/proj5/5.jpg';
import proj56Jpg from '../../public/images/proj5/6.jpg';
import proj57Jpg from '../../public/images/proj5/7.jpg';


const ITEMS = [
    {
        text: 'Studio33 at Kelowna',
        imgs: [
            proj00Jpg,
            proj01Jpg,
            proj02Jpg,
            proj03Jpg,
        ],
    },
    {
        text: '10051 Hollycroft at Richmond',
        imgs: [
            proj10Jpg,
            proj11Jpg,
            proj12Jpg,
            proj13Jpg,
            proj14Jpg,
            proj15Jpg,
        ],
    },
    {
        text: '6567 Cartier at Vancouver',
        imgs: [
            proj20Jpg,
            proj21Jpg,
            proj22Jpg,
            proj23Jpg,
            proj24Jpg,
            proj25Jpg,
            proj26Jpg,
            proj27Jpg,
        ],
    },
    {
        text: '8540 Mowbray at Richmond',
        imgs: [
            proj30Jpg,
            proj31Jpg,
            proj32Jpg,
            proj33Jpg,
            proj34Jpg,
            proj35Jpg,
            proj36Jpg,
            proj37Jpg,
        ],
    },
    {
        text: '10726 Canso at Richmond',
        imgs: [
            proj40Jpg,
            proj41Jpg,
            proj42Jpg,
            proj43Jpg,
            proj44Jpg,
            proj45Jpg,
            proj46Jpg,
            proj47Jpg,
        ],
    },
    {
        text: '13600 Blackburn at White Rock',
        imgs: [
            proj50Jpg,
            proj51Jpg,
            proj52Jpg,
            proj53Jpg,
            proj54Jpg,
            proj55Jpg,
            proj56Jpg,
            proj57Jpg,
        ],
    },
];

export const Projects = () => {
    const [openedImg, setOpenedImg] = useState(null);

    const onClose = (e) => {
        if (e.target === e.currentTarget) setOpenedImg(null);
    };

    return <>
        {openedImg &&
            <Portal>
                <ModalBackground onClick={onClose}>
                    <CloseBtn onClick={onClose}>&times;</CloseBtn>
                    <ModalContent>
                        <Carousel images={openedImg} />
                    </ModalContent>
                </ModalBackground>
            </Portal>
        }
        <Grid>{
            ITEMS.map(({ text, imgs }) => <GridItem key={text}>
                <ProjThumbnail src={imgs[0]} onClick={() => setOpenedImg(imgs)} />
                {text}
            </GridItem>)
        }</Grid >
    </>;
};;