import { useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';


export const Portal = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
    const elem = document.createElement('div');

    useEffect(() => {
        portalRoot.appendChild(elem);
        return () => portalRoot.removeChild(elem);
    }, [portalRoot, elem]);

    useLayoutEffect(() => {
        const prevOverflow = document.body.style.overflow;
        const prevPosition = document.body.style.position;
        const prevTop = window.scrollY;
        document.body.style.overflow = 'visible';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${prevTop}px`;

        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.position = prevPosition;
            window.scroll(0, prevTop);
        };
    }, []);

    return createPortal(children, elem);
};
