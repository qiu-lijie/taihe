import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { GlobalStyle, Footer0, Footer1 } from './style';
import { Navbar } from './navbar/Navbar';
import { Welcome } from './pages/Welcome';
import { About } from './pages/About';
import { Care } from './pages/Care';
import { Project } from './pages/Project';

export const App = () => {
    const location = useLocation();
    const state = location.state;
    const navigationType = useNavigationType();
    useLayoutEffect(() => {
        if (!state?.backgroundLocation && navigationType !== 'POP')
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
            {state?.backgroundLocation && (
                <Routes>
                    <Route element={<Modal />}>
                        <Route path="/studio33-at-kelowna/" element={<LoginC Head={HeadC} />} />
                    </Route>
                </Routes>
            )}

            <Routes location={state?.backgroundLocation || location}>
                <Route path="/">
                    <Route index element={<Welcome />} />
                    <Route path="about/" element={<About />} />
                    <Route path="projects/" element={<Project />} />
                    <Route path="care/" element={<Care />} />
                </ Route>
            </Routes>
        </main>

        <Footer0>
            <p>TAIHE CONSTRUCTION LTD.</p>
            <br />
            <p>
                778 259 5555
                <br />
                taiheconstruction2020@gmail.com
            </p>
            {/* !!!TODO footer logo? */}
        </Footer0>
        <Footer1>Copyright - TaiHe Construction Ltd. - Developed by qiu_lijie</Footer1>
    </React.StrictMode>;
};
