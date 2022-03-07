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

    let text = disableItem? <div className={"error-text"}>Error</div> : <div className={"print-text"}>the text is print</div>;
    console.log(change);

    // let pastNumber = data === 5 ? {color: "red"} : {}
    //let counterCN = data === 5 ? "counter pastNumber" : "counter"

    return (
        <div >
            <div className="counter">{change ? text : data}</div>
            <ButtonBlockForCounter
                onClickChangeNum={onClickChangeNum}
                resetNumber={resetNumber}
                disable={disableItem}
            />
        </div>
    );
};

export default Counter;