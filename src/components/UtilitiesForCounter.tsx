import React, {ChangeEvent, Dispatch, memo, useCallback, useEffect} from 'react';
import Button from "./Button";
import {changeDisableItem, setError} from "../state/app-reducer";
import '../App.css';
import Input from './Input';


type UtilitiesForCounterType = {
    isMinNumber: boolean
    change: boolean;
    disableItem: boolean;
    onClickLocalStorage: (max: number, min: number) => void;
    startNumber: number
    maxNumber: number
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    isError: boolean
    dispatch: Dispatch<any>
    isMaxNumber: boolean
}
const UtilitiesForCounter = (props: UtilitiesForCounterType) => {
    console.log("UtilitiesForCounter")

    const onClickHandlerListenerForButton = () => {
        debugger
        props.onClickLocalStorage(props.maxNumber, props.startNumber);
    }

    useEffect(() => {
        if (
            props.maxNumber < 0 ||
            props.startNumber < 0 ||
            props.maxNumber < props.startNumber ||
            props.startNumber > props.maxNumber ||
            props.startNumber === props.maxNumber
        ) {
            props.dispatch(changeDisableItem(true))
            props.dispatch(setError(true))
        } else props.dispatch(changeDisableItem(false))
        props.dispatch(setError(false))
    }, [props.maxNumber, props.startNumber])

    let errorForInput = props.disableItem ? "errorValue" : ""

    return (
        <div>
            <div className="counterUtilities">
                <div><span>max value:</span>
                    <Input maxMinNumber={props.maxNumber}
                           disableItem={props.disableItem}
                           onChangeMaxValue={props.onChangeMaxValue}
                           style={{margin: "4px"}}
                    />
                </div>
                <div><span>start value:</span>
                    <Input maxMinNumber={props.startNumber}
                           onChangeMaxValue={props.onChangeMinValue}
                           disableItem={props.disableItem}
                           style={{}}
                    />
                    {/*  <input type="number"
                           className={errorForInput}
                           value={props.startNumber}
                           onChange={props.onChangeMinValue}
                    />*/}
                </div>
            </div>
            <div className={"button-block-for-utilities"}>
                <Button
                    title={"set"}
                    disable={props.disableItem}
                    onClickHandler={onClickHandlerListenerForButton}
                />
            </div>
        </div>
    );
};

export default UtilitiesForCounter;