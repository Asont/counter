import React from 'react';
import Button from "./Button";

type CounterType = {
    maxNumber: number;
    startNumber: number;
    change: boolean;
    data: number
    setData: (data: number) => void
    disableItem: boolean;
    setDisableItem: (disableItem: boolean) => void;
    isMaxNumber:boolean
    error: string
}


const Counter: React.FC<CounterType> = (
    {
        data,
        setData,
        disableItem,
        setDisableItem,
        change,
        startNumber,
        maxNumber,
        isMaxNumber,
        error
    }
) => {


    const resetNumber = () => {
        setData(startNumber)
    }

    const onClickChangeNum = () => {
        if (data >= startNumber && data <= maxNumber - 1) {
            setData(data + 1);
        }
    };

    let text = error ? <span className={"error-text"}>Incorrect value</span> :
        <span className={"print-text"}>press "set"</span>;




    let styleForCounter = isMaxNumber ? "counterWithMaxValue" : "counter"
    isMaxNumber && setDisableItem(true)

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