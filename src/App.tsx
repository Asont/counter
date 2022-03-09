import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter";
import UtilitiesForCounter from "./UtilitiesForCounter";

function App() {

    const [data, setData] = useState<number>(0)
    const [disableItem, setDisableItem] = useState(false);
    const [change, setChange] = useState<boolean>(false);

    const onClickLocalStorage = (max: number, min: number) => {
        let a;
        let b;
        return (
            localStorage.setItem("min", JSON.stringify(min)),
                localStorage.setItem("max", JSON.stringify(max)),
                (a = localStorage.getItem("min")),
                a ? (b = JSON.parse(a), setData(b)) : null,
                console.log(max),
                console.log(min),
                setChange(false)
        );
    };


    return (
        <div className="App">
            <div className="CounterBlok" >
                <UtilitiesForCounter
                    change={change}
                    setChange={setChange}
                    disableItem={disableItem}
                    setDisableItem={setDisableItem}
                    onClickHandlerListener={onClickLocalStorage}
                />
            </div>
            <div className="UtilitiesBlok" >
                <Counter
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
