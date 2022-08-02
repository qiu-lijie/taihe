import React, { useState } from 'react';
import { Grid, GridItem, ProjThumbnail } from './style';
import { Portal } from '../core/Portal';
import { ModalBackground, ModalContent, CloseBtn } from '../core/style';
import proj00Jpg from '../../public/images/proj0/0.jpg';
import proj01Jpg from '../../public/images/proj0/1.jpg';
import proj02Jpg from '../../public/images/proj0/2.jpg';
import proj03Jpg from '../../public/images/proj0/3.jpg';
import { Carousel } from '../core/Carousel';


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
        text: 'Studio33 at Kelowna0',
        imgs: [
            proj00Jpg,
            proj01Jpg,
            proj02Jpg,
            proj03Jpg,
        ],
    },
];

export const Projects = () => {
    const [openedImg, setOpenedImg] = useState(null);

    return <>
        {openedImg &&
            <Portal>
                <ModalBackground>
                    <CloseBtn onClick={() => setOpenedImg(null)}>&times;</CloseBtn>
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