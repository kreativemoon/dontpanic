import React, { FC } from 'react';
import { Rectangle } from './styles';
import { Link } from 'react-router-dom';

interface Props {
    show: boolean;
    // showConfirmCallToAction: boolean;
    // close: () => void;
    // confirmButtonText: string | JSX.Element;
    // confirmButtonAction: () => void;
}

// const Modal: FC<Props> = ({ show, children, showConfirmCallToAction, close, confirmButtonText, confirmButtonAction}) => {
    const Modal: FC<Props> = ({ show, children }) => {

    if (!show) {
        return null;
    }

    return (
    <Rectangle>
        {children}
    </Rectangle>
    
  );
};

export default Modal;
