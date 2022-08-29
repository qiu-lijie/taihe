import styled from 'styled-components';
import { BODY_NAV_WIDTH, MAX_WIDTH } from '../style';


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    margin-top: 1.5rem;
    ${BODY_NAV_WIDTH}
    @media ${MAX_WIDTH} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProjThumbnail = styled.img`
    width: 20rem;
    height: 12rem;
    object-fit: cover;
    margin-bottom: 1rem;
    @media ${MAX_WIDTH} {
        grid-template-columns: repeat(1, 1fr);
        ${BODY_NAV_WIDTH}
    }

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;

export const Form = styled.form`
    text-align: left;
    ${BODY_NAV_WIDTH}

    input[type='text'],
    input[type='email'],
    input[type='password'],
    input[type='date'],
    textarea {
        font-size: 0.85rem;
        width: 100%;
        padding: 0.5rem;
        border: 1px solid var(--primary);
        border-radius: 5px;
        box-sizing: border-box;
    }

    textarea {
        height: 8rem;
        font-family: inherit;
    }

    button {
        color: var(--background);
        background-color: var(--primary);
        border: 2px solid var(--primary);
        font-size: 1.5rem;
        padding: .25rem .5rem;
        margin: .5rem;
        border-radius: 5px;
        &:hover,
        &.active {
            border: 2px solid var(--secondary);
        }
    }
`;

export const ColToRow = styled.div`
    display: flex;
    flex-direction: row;
    @media ${MAX_WIDTH} {
        flex-direction: column;
    }
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 .5rem 1rem;
`;
