import React, { useLayoutEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { ModalBackground, ModalContent, CloseBtn } from './style';
import { disableBodyScroll } from './utils';


export const Modal = () => {
    const navigate = useNavigate();

    useLayoutEffect(disableBodyScroll, []);

    const onClose = (e) => {
        if (e.target === e.currentTarget) navigate(-1);
    };

    return (
        <ModalBackground onClick={onClose}>
            <CloseBtn onClick={onClose} data-se="modalClose">&times;</CloseBtn>
            <ModalContent data-se="modalContent">
                <Outlet />
            </ModalContent>
        </ModalBackground>
    );
};
