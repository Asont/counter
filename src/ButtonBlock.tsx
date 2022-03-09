import React from 'react';
import Button from "./Button";
import './App.css';

type ButtonBlockType = {

    resetNumber: () => void
    disable: boolean
    onClickChangeNum: () => void
}

const ButtonBlock: React.FC<ButtonBlockType> = ({resetNumber, disable, onClickChangeNum}) => {


    return (
        <div className="button-block">
            <Button title={"inc"} onClickHandler={onClickChangeNum} disable={disable}/>
            <Button title={"reset"} onClickHandler={resetNumber} disable={false}/>
        </div>
    );
};

export default ButtonBlock;