import { useEffect } from 'react';
import { createPortal } from 'react-dom';


export const Portal = ({ children }) => {
    const portalRoot = document.getElementById('portal-root');
    const elem = document.createElement('div');

    useEffect(() => {
        portalRoot.appendChild(elem);
        return () => portalRoot.removeChild(elem);
    }, [portalRoot, elem]);

    return createPortal(children, elem);
};
