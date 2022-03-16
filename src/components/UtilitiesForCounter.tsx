import React, {ChangeEvent, useEffect} from 'react';
import Button from "./Button";


type UtilitiesForCounterType = {
    change: boolean;
    disableItem: boolean;
    setDisableItem: (disableItem: boolean) => void;
    onClickLocalStorage: (max: number, min: number) => void;
    isMaxNumber: boolean
    startNumber: number
    setMinNumber: (startNumber: number) => void
    maxNumber: number
    setMaxNumber: (maxNumber: number) => void
    isMinNumber: boolean
    onChangeMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: string
}
const UtilitiesForCounter = (props: UtilitiesForCounterType) => {
    const onClickHandlerListenerForButton = () => {
        props.onClickLocalStorage(props.maxNumber, props.startNumber);
    };
    useEffect(() => {
        if (
            props.maxNumber < 0 ||
            props.startNumber < 0 ||
            props.maxNumber < props.startNumber ||
            props.startNumber > props.maxNumber ||
            props.startNumber === props.maxNumber
        ) {
            props.setDisableItem(true);
        } else props.setDisableItem(false);
    },)



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
};

export default UtilitiesForCounter;