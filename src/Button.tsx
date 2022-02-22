import React from 'react';

type ButtonType = {
    title: string
    onClickHandler: () => void
    disable: boolean
}

const Button: React.FC<ButtonType> = ({title, onClickHandler, disable}) => {
    return (
        <button disabled={disable} onClick={onClickHandler}>{title}</button>
    );
};

export default Button;