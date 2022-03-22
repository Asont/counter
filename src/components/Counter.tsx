import React, {Dispatch, useState} from 'react';
import Button from "./Button";

import {changeData, resetCounter} from "../state/app-reducer";



type CounterType = {
    maxNumber: number;
    startNumber: number;
    change: boolean;
    data: number
    disableItem: boolean;
    isMaxNumber: boolean
    isError:boolean
    dispatch:Dispatch<any>
}


const Counter: React.FC<CounterType> = (
    {
        data,
        disableItem,
        change,
        startNumber,
        maxNumber,
        isMaxNumber,
        isError,
        dispatch
    }
) => {

    const resetNumber =  () => {
        dispatch(resetCounter(startNumber))
    }

    const onClickChangeNum = () => {
        if (data >= startNumber && data <= maxNumber - 1) {
            return  dispatch(changeData(++data))
        }
    };
    let text = isError ? <span className={"error-text"}>Incorrect value</span> :
        <span className={"print-text"}>press "set"</span>;

    let styleForCounter = isMaxNumber ? "counterWithMaxValue" : "counter"


    return (
        <div>
            <div className={styleForCounter}>{change ? text : data}</div>
            <div className="button-block">
                <Button title={"inc"} onClickHandler={onClickChangeNum} disable={disableItem}/>
                <Button title={"reset"} onClickHandler={resetNumber} disable={false}/>
            </div>
        </div>
    );
};

export default Counter;