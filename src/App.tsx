import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import UtilitiesForCounter from "./components/UtilitiesForCounter";

function App() {
    useEffect(() => {
        debugger
        setMinNumber(JSON.parse(localStorage.getItem("min") || "null"))
        setMaxNumber(JSON.parse(localStorage.getItem("max") || "null"))
    }, [])

    const [disableItem, setDisableItem] = useState(false);
    const [change, setChange] = useState<boolean>(false);
    const [minNumber, setMinNumber] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState<number>(5);
    const [data, setData] = useState<number>(minNumber)
    const isMaxNumber = data === maxNumber
    const isMinNumber = data === minNumber

    const onClickLocalStorage = (max: number, min: number) => {
        debugger
        localStorage.setItem("min", JSON.stringify(min))
        localStorage.setItem("max", JSON.stringify(max))
        setMinNumber(min)
        setMaxNumber(max)
        setChange(false)
    };


    return (
        <div className="App">
            <div className="CounterBlok">
                <UtilitiesForCounter
                    isMinNumber={isMinNumber}
                    isMaxNumber={isMaxNumber}
                    startNumber={minNumber}
                    setMinNumber={setMinNumber}
                    maxNumber={maxNumber}
                    setMaxNumber={setMaxNumber}
                    change={change}
                    setChange={setChange}
                    disableItem={disableItem}
                    setDisableItem={setDisableItem}
                    onClickLocalStorage={onClickLocalStorage}
                />
            </div>
            <div className="UtilitiesBlok">
                <Counter
                    maxNumber={maxNumber}
                    isMaxNumber={isMaxNumber}
                    startNumber={minNumber}
                    change={change}
                    data={data}
                    setData={setData}
                    disableItem={disableItem}
                    setDisableItem={setDisableItem}
                />

            </div>
        </div>
    );
}

export default App;
