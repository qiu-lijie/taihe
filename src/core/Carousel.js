import React, { useEffect, useRef, useState } from 'react';

import {
    CarouselDiv,
    CarouselCells,
    CarouselCell,
    Prev,
    Next,
    CarouselDots,
    Dot,
} from './style';


export const Carousel = ({ images }) => {
    const [currIndex, setCurrIndex] = useState(0);
    const [initPos, setInitPos] = useState({ x: 0, y: 0 });
    const cellsRef = useRef();

    const openImage = (e) => {
        if (e.target !== e.currentTarget) return;
        setOpenedImg(images[currIndex]);
    };

    const showCell = (idx) => {
        if (idx >= images.length)
            idx = 0;
        else if (idx < 0)
            idx = images.length - 1;
        setCurrIndex(idx);
    };

    // swipe support
    const unify = (e) => e.changedTouches ? e.changedTouches[0] : e;
    const lockPos = (e) => {
        e = unify(e);
        setInitPos({ x: e.clientX, y: e.clientY });
    };
    const swipe = (e) => {
        e = unify(e);
        if (Math.abs(e.clientY - initPos.y) > 30 || Math.abs(e.clientX - initPos.x) < 30)
            return;
        const movement = Math.sign(e.clientX - initPos.x);
        showCell(currIndex - movement);
    };

    return <>
        <CarouselDiv>
            <CarouselCells onClick={openImage} ref={cellsRef}
                onTouchStart={lockPos} onTouchEnd={swipe}>
                {images.map((image, i) => (
                    <CarouselCell key={i} index={i} currIndex={currIndex}
                        src={image} alt="Post Image" />
                ))}
                {images.length !== 1 && <>
                    <Prev onClick={() => showCell(currIndex - 1)} data-se="prev">&#10094;</Prev>
                    <Next onClick={() => showCell(currIndex + 1)} data-se="next">&#10095;</Next>
                </>
                }
            </CarouselCells>
            {images.length !== 1
                && <CarouselDots>
                    {images.map((_, i) => (
                        <Dot key={i} index={i} currIndex={currIndex}
                            onClick={() => showCell(i)} />
                    ))}
                </CarouselDots>
            }
        </CarouselDiv>
    </>;
};
