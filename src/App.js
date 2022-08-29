import React, { useLayoutEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes, useLocation, useNavigationType } from 'react-router-dom';

import { GlobalStyle, Footer0, Footer1 } from './style';
import { Navbar } from './navbar/Navbar';
import { Welcome } from './pages/Welcome';
import { About } from './pages/About';
import { Care } from './pages/Care';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact';

export const App = () => {
    const location = useLocation();
    const navigationType = useNavigationType();
    useLayoutEffect(() => {
        if (navigationType !== 'POP')
            window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return <React.StrictMode>
        <Helmet defer={false}>
            <title>TAIHE CONSTRUCTION LTD.</title>
            <meta name="description" content="!!!TODO" />
        </Helmet>
        <GlobalStyle />
        <Navbar />

        <main>
            <Routes>
                <Route path="/">
                    <Route index element={<Welcome />} />
                    <Route path="about/" element={<About />} />
                    <Route path="projects/" element={<Project />} />
                    <Route path="care/" element={<Care />} />
                    <Route path="contact/" element={<Contact />} />
                </ Route>
            </Routes>
        </main>

        <Footer0>
            <p>TAIHE CONSTRUCTION LTD.</p>
            <br />
            <p>
                778 259 5555
                <br />
                <a href="mailto:taiheconstruction2020@gmail.com?subject=TaiHe Website Inquiry">taiheconstruction2020@gmail.com</a>
            </p>
        </Footer0>
        <Footer1>Copyright - TaiHe Construction Ltd. - Developed by qiu_lijie</Footer1>
    </React.StrictMode>;
};
