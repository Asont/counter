import React, {ChangeEvent} from 'react';
import Button from "./Button";


type UtilitiesForCounterType = {
    change: boolean;
    setChange: (change: boolean) => void;
    disableItem: boolean;
    setDisableItem: (disableItem: boolean) => void;
    onClickLocalStorage: (max: number, min: number) => void;
    isMaxNumber: boolean
    startNumber: number
    setMinNumber: (startNumber: number) => void
    maxNumber: number
    setMaxNumber: (maxNumber: number) => void
    isMinNumber:boolean
}


const UtilitiesForCounter = (props: UtilitiesForCounterType) => {


    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxNumber(parseInt(e.currentTarget.value));
        props.isMaxNumber ? props.setChange(true) : props.setChange(!props.change);
    };

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinNumber(parseInt(e.currentTarget.value));
        console.log(props.startNumber)
        props.isMinNumber? props.setChange(true): props.setChange(!props.change);
    };

    const onClickHandlerListenerForButton = () => {
        props.onClickLocalStorage(props.maxNumber, props.startNumber);
    };

    if (
        props.maxNumber < 0 ||
        props.startNumber < 0 ||
        props.maxNumber < props.startNumber ||
        props.startNumber > props.maxNumber ||
        props.startNumber === props.maxNumber
    ) {
        props.setDisableItem(true);
    } else props.setDisableItem(false);


    let error = props.disableItem ? "errorValue" : "";

    return (
        <div>
            <div className="counterUtilities">
                <div><span>max value:</span>
                    <input type="number"
                           className={error}
                           value={props.maxNumber}
                           onChange={onChangeMaxValue}
                           style={{margin: "4px"}}
                    />
                </div>
                <div><span>start value:</span>
                    <input type="number"
                           className={error}
                           value={props.startNumber}
                           onChange={onChangeMinValue}

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