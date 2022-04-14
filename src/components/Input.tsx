import React, {ChangeEvent} from 'react';

type InputType = {
    maxMinNumber: number,
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void,
    disableItem: boolean,
    style:{}
}

const Input = (props: InputType) => {

    let errorForInput = props.disableItem ? "errorValue" : ""

    return (
        <input type="number"
               style={props.style}
               className={errorForInput}
               value={props.maxMinNumber}
               onChange={props.onChangeMaxValue}
        />
    )
};

export default Input;