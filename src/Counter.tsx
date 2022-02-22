import React from 'react';
import ButtonBlockForCounter from "./ButtonBlock";

type CounterType = {
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
        setDisableItem
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


    // let pastNumber = data === 5 ? {color: "red"} : {}
    //let counterCN = data === 5 ? "counter pastNumber" : "counter"

    return (
        <div>
            <div>{data}</div>
            <ButtonBlockForCounter
                onClickChangeNum={onClickChangeNum}
                resetNumber={resetNumber}
                disable={disableItem}
            />
        </div>
    );
};

export default Counter;