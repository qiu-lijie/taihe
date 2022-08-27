import styled, { css, createGlobalStyle } from 'styled-components';


export const MAX_WIDTH = '(max-width: 900px)';
export const BODY_WIDTH = '60%';
export const BODY_WIDTH_MOBILE = '85%';

export const BODY_NAV_WIDTH = css`
    max-width: 1000px;
    width: ${BODY_WIDTH};
    margin-left: auto;
    margin-right: auto;
    @media ${MAX_WIDTH} {
        width: ${BODY_WIDTH_MOBILE};
    }
`;

export const LEFT_ALIGN = css`
    ${BODY_NAV_WIDTH}
    text-align: left;
`;

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: 16px;
    font-family: Helvetica, Arial, Verdana, sans-serif;
    --primary: #666667;
    --secondary: #191d24;
    --background: white;
    --navbar: white;
    --text: #666667;
    --selected: #666667;
    --nav-height: 120px;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-thumb {
    background: var(--secondary);
    border-radius: 5px;
}

::-webkit-scrollbar-track {
    background: var(--navbar);
}

html, html * {
    scrollbar-width: thin;
    scrollbar-color: var(--secondary) var(--navbar);
    overflow-x: hidden;
}

body {
    margin: 0;
    text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: var(--primary);
    font-weight: normal;
}

p {
    ${BODY_NAV_WIDTH}
}

a {
    color: var(--text);
}
`;

export const MainImg = styled.img`
    width: 100%;
    @media ${MAX_WIDTH} {
        margin-top: calc(var(--nav-height) * 2);
    }
`;

export const Footer = styled.div`
    padding: 1.5rem;
    & > * {
        text-align: left;
        margin: 0;
    }
`;

export const Footer0 = styled(Footer)`
    color: var(--background);
    margin-top: 1rem;
    font-size: .8rem;
    background-color: #34424c;

    & a {
        color: var(--backgroud);
    }
`;

export const Footer1 = styled(Footer)`
    color: var(--primary);
    font-size: .75rem;
    background-color: var(--secondary);
`;
