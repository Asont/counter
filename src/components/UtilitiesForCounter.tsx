import React, {ChangeEvent, memo, useCallback, useEffect} from 'react';
import Button from "./Button";


type UtilitiesForCounterType = {
    change: boolean;
    disableItem: boolean;
    onClickLocalStorage: (max: number, min: number) => void;
    startNumber: number
    maxNumber: number
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
    isError: boolean
}
const UtilitiesForCounter = memo((props: UtilitiesForCounterType) => {


    const onClickHandlerListenerForButton = useCallback(() => {
        props.onClickLocalStorage(props.maxNumber, props.startNumber);
        debugger
    },[]);

 /*   useEffect(() => {
        if (
            props.maxNumber < 0 ||
            props.startNumber < 0 ||
            props.maxNumber < props.startNumber ||
            props.startNumber > props.maxNumber ||
            props.startNumber === props.maxNumber
        ) { return props.disableItem = true }
        else {
            props.disableItem = false
            props.isError = false
        }
    }, [])*/


    return (
        <div>
            <div className="counterUtilities">
                <div><span>max value:</span>
                    <input type="number"
                           className={props.error}
                           value={props.maxNumber}
                           onChange={props.onChangeMaxValue}
                           style={{margin: "4px"}}
                    />
                </div>
                <div><span>start value:</span>
                    <input type="number"
                           className={props.error}
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
});

export default UtilitiesForCounter;