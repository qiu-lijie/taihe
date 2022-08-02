import styled from 'styled-components';
import { BODY_NAV_WIDTH, MAX_WIDTH } from '../style';


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    width: 100%;
    ${BODY_NAV_WIDTH}
    @media ${MAX_WIDTH} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const GridItem = styled.div`
    display: flex;
    flex-direction: column;
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
