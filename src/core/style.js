import styled, { keyframes } from 'styled-components';
import { MAX_WIDTH } from '../style';


export const ModalBackground = styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: black;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const fade = keyframes`
    0% {
        opacity: .4
    } 
    100% {
        opacity: 1
    }
`;

export const dropdown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-100vh);
    }
    100% {
        opacity: 1;
    }
`;

export const popup = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100vh);
    }
    100% {
        opacity: 1;
    }
`;

export const ModalContent = styled.main`
    margin: auto;
    border: 1px solid var(--primary);
    border-radius: 5px;
    background-color: var(--navbar);
    width: max-content;
    animation: ${dropdown} 400ms ease-out forwards;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${MAX_WIDTH} {
        /* position: absolute; */
        /* top: calc(var(--nav-height) + 10px); */
        /* bottom: -200px; */
        /* padding-bottom: 200px; */
        width: 100vw;
        box-sizing: border-box;
        animation: ${popup} 400ms ease-out forwards;
    }
`;

export const ModalImg = styled.img`
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    margin: auto;
`;

export const CloseBtn = styled.span`
    color: #aaaaaa;
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    z-index: 1;

    &:hover,
    &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    @media ${MAX_WIDTH} {
        top: 0;
        right: .5rem;
    }
`;

export const CarouselDiv = styled.div`
    position: relative;
    text-align: center;
`;

export const CarouselCells = styled.div`
    position: relative;
    max-width: 80vw;
    max-height: 80vh;
    display: grid;
    align-content: center;
    grid-template-columns: 1fr;
    overflow: hidden;

    @media ${MAX_WIDTH} {
        max-width: 100vw;
        max-height: 80vh;
    }
`;

export const CarouselCell = styled.img`
    grid-row-start: 1;
    grid-column-start: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    animation: ${fade} 1000ms;
    ${({ index, currIndex }) => index === currIndex ?
        'visibility: visible;' :
        'visibility: hidden;'}
`;


export const Prev = styled.span`
    cursor: pointer;
    position: absolute;
    top: 0;
    height: 100%;
    padding: 0 3rem;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    transition: 0.6s ease;
    user-select: none;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

export const Next = styled(Prev)`
    right: 0;
`;

export const CarouselDots = styled.div`
    position: relative;
    bottom: 2rem;
    height: 1rem;
    margin-bottom: -1rem;
    overflow: hidden;
`;

export const Dot = styled.span`
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    ${({ index, currIndex }) => index === currIndex && 'background-color: #717171;'}
    &:hover {
        background-color: #717171;
    }
`;
