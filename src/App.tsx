import React, {ChangeEvent, useEffect} from 'react';
import './App.css';
import Counter from "./components/Counter";
import UtilitiesForCounter from "./components/UtilitiesForCounter";
import {useDispatch, useSelector} from "react-redux";
import {changeChange, setLocalStorage, setMaxValue, setMinValue, StateAppType} from "./state/app-reducer";
import {AppRootStateType} from "./state/store";

const App= ()=> {

    const state1 = useSelector<AppRootStateType, StateAppType>(state=>state.appReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        state1.minNumber = (JSON.parse(localStorage.getItem("min") || "null"))
        state1.maxNumber = (JSON.parse(localStorage.getItem("max") || "null"))
        dispatch(setLocalStorage(state1.maxNumber, state1.minNumber))
    }, [])

    const onClickLocalStorage = (max: number, min: number) => {
        debugger
        localStorage.setItem("min", JSON.stringify(min))
        localStorage.setItem("max", JSON.stringify(max))
        dispatch(setLocalStorage(max, min))
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        let tempMaxNumber = parseInt(e.currentTarget.value)
        state1.isMaxNumber = state1.data===tempMaxNumber
        state1.isMaxNumber? dispatch(changeChange(false)):dispatch(changeChange(true))
        dispatch(setMaxValue(tempMaxNumber))

    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        let tempMinNumber = parseInt(e.currentTarget.value)
        state1.isMinNumber = state1.data===tempMinNumber
        state1.isMinNumber? dispatch(changeChange(false)):dispatch(changeChange(true))
        dispatch(setMinValue(tempMinNumber))
    }

    return (
        <div className="App">
            <div className="CounterBlok">
                <UtilitiesForCounter
                    isMinNumber={state1.isMinNumber}
                    startNumber={state1.minNumber}
                    maxNumber={state1.maxNumber}
                    change={state1.change}
                    isError={state1.isError}
                    disableItem={state1.disableItem}
                    onClickLocalStorage={onClickLocalStorage}
                    onChangeMaxValue={onChangeMaxValue}
                    onChangeMinValue={onChangeMinValue}
                    error = {state1.error}
                    dispatch={dispatch}
                    isMaxNumber={state1.isMaxNumber}
                />
            </div>
            <div className="UtilitiesBlok">
                <Counter
                    dispatch={dispatch}
                    isError={state1.isError}
                    maxNumber={state1.maxNumber}
                    isMaxNumber={state1.isMaxNumber}
                    startNumber={state1.minNumber}
                    change={state1.change}
                    data={state1.data}
                    disableItem={state1.disableItem}
                />

            </div>
        </div>
    );
}

export default App;
