import React, {Dispatch} from 'react';


import {changeData, resetCounter} from "../state/app-reducer";
import Button from "./Button";

type CounterType = {
    maxNumber: number;
    startNumber: number;
    change: boolean;
    data: number
    disableItem: boolean;
    isMaxNumber: boolean
    isError: boolean
    dispatch: Dispatch<any>
}

const Counter: React.FC<CounterType> =(
    {
        data,
        disableItem,
        change,
        startNumber,
        maxNumber,
        dispatch
    }
) => {
    console.log("Counter")
    const resetNumber =() => {
        dispatch(resetCounter(startNumber))
    }

    const onClickChangeNum = () => {
        if (data >= startNumber && data <= maxNumber - 1) {
            return dispatch(changeData(++data))
        }
    }

    let text = disableItem ? <span className={"error-text"}>Incorrect value</span> :
        <span className={"print-text"}>press "set"</span>;

    let styleForCounter = maxNumber === data ? "counterWithMaxValue" : "counter"

    return (
        <div>
            <div className={styleForCounter}>{change ? text : data}</div>
            <div className="button-block">
                <Button title={"inc"} onClickHandler={onClickChangeNum} disable={disableItem || maxNumber === data}/>
                <Button title={"reset"} onClickHandler={resetNumber} disable={false}/>
            </div>
        </div>
    );
};

export default Counter;