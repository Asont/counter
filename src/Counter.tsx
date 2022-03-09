import React from 'react';
import ButtonBlockForCounter from "./ButtonBlock";

type CounterType = {
    change: boolean;
    data: number
    setData: (data: number) => void
    disableItem: boolean;
    setDisableItem: (disableItem: boolean) => void;
}


const Counter: React.FC<CounterType> = (
    {
        data,
        setData,
        disableItem,
        setDisableItem,
        change
    }
) => {


    const resetNumber = () => {
        setData(0)
    }

    const onClickChangeNum = () => {
        let startNumber
        let getNumStart = localStorage.getItem("min")
        if (getNumStart) {
            startNumber = JSON.parse(getNumStart)
        }
        let maxNumber
        let getMaxNumber = localStorage.getItem("max")
        if (getMaxNumber) {
            maxNumber = JSON.parse(getMaxNumber)
        }
        if (data >= startNumber && data <= maxNumber - 1) {
            setData(data + 1);

        }
        console.log(startNumber);
        console.log(maxNumber);
    };

    let text = disableItem? <span className={"error-text"}>Incorrect value</span> : <span className={"print-text"}>press "set"</span>;

    let maxNumber1
    let getMaxNumber = localStorage.getItem("max")
    if (getMaxNumber) {
        maxNumber1 = JSON.parse(getMaxNumber)
    }


let styleForCounter = data ===maxNumber1 ? "counterWithMaxValue"  : "counter"

    if(data ===maxNumber1) {
        setDisableItem(true)
    }

    return (
        <div>
            <div className={styleForCounter}>{change ? text : data}</div>
            <ButtonBlockForCounter
                onClickChangeNum={onClickChangeNum}
                resetNumber={resetNumber}
                disable={disableItem}
            />
        </div>
    );
};

export default Counter;