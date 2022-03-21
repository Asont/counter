import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import UtilitiesForCounter from "./components/UtilitiesForCounter";

function App() {
    useEffect(() => {
        setMinNumber(JSON.parse(localStorage.getItem("min") || "null"))
        setMaxNumber(JSON.parse(localStorage.getItem("max") || "null"))
    }, [])

    const [disableItem, setDisableItem] = useState(false);
    const [change, setChange] = useState<boolean>(false);
    const [error, setError] = useState<string>('')
    const [isError, setIsError] = useState<boolean>(false)
    const [minNumber, setMinNumber] = useState<number>(0);
    const [maxNumber, setMaxNumber] = useState<number>(5);
    const [data, setData] = useState<number>(minNumber)
    const isMaxNumber = data === maxNumber
    const isMinNumber = data === minNumber

    const onClickLocalStorage = (max: number, min: number) => {
        localStorage.setItem("min", JSON.stringify(min))
        localStorage.setItem("max", JSON.stringify(max))
        setMinNumber(min)
        setMaxNumber(max)
        setChange(false)
        setData(min)
    };

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChange(true)
        setMaxNumber(parseInt(e.currentTarget.value));
        isMaxNumber ? setError("error value") : setError('');
    };

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChange(true)
        setMinNumber(parseInt(e.currentTarget.value));
        isMinNumber ? setError("error value") : setError('');
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
                    isError={isError}
                    setIsError={setIsError}
                    disableItem={disableItem}
                    setDisableItem={setDisableItem}
                    onClickLocalStorage={onClickLocalStorage}
                    onChangeMaxValue={onChangeMaxValue}
                    onChangeMinValue={onChangeMinValue}
error = {error}
                />
            </div>
            <div className="UtilitiesBlok">
                <Counter
                    isError={isError}
                    maxNumber={maxNumber}
                    isMaxNumber={isMaxNumber}
                    startNumber={minNumber}
                    change={change}
                    data={data}
                    setData={setData}
                    disableItem={disableItem}
                    setDisableItem={setDisableItem}
                    error={error}
                />

            </div>
        </div>
    );
}

export default App;
