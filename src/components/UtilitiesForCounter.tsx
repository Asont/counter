import React, {ChangeEvent, Dispatch,useEffect} from 'react';
import Button from "./Button";
import {changeDisableItem, setError} from "../state/app-reducer";
import '../App.css';


type UtilitiesForCounterType = {
    isMinNumber:boolean
    change: boolean;
    disableItem: boolean;
    onClickLocalStorage: (max: number, min: number) => void;
    startNumber: number
    maxNumber: number
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    isError: boolean
    dispatch:Dispatch<any>
    isMaxNumber:boolean
}
const UtilitiesForCounter =(props: UtilitiesForCounterType) => {


    const onClickHandlerListenerForButton = () => {
        props.onClickLocalStorage(props.maxNumber, props.startNumber);
        debugger
    };


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
        } else  props.dispatch(changeDisableItem(false))
        props.dispatch(setError(false))
    },[props.maxNumber, props.startNumber])
debugger


let errorForInput = props.disableItem?"errorValue":""


    return (
        <div>
            <div className="counterUtilities">
                <div><span>max value:</span>
                    <input type="number"
                           className={errorForInput}
                           value={props.maxNumber}
                           onChange={props.onChangeMaxValue}
                           style={{margin: "4px"}}
                    />
                </div>
                <div><span>start value:</span>
                    <input type="number"
                           className={errorForInput}
                           value={props.startNumber}
                           onChange={props.onChangeMinValue}

                    />
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