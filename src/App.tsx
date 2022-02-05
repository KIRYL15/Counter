import React, {useState} from 'react';
import './App.css';
import {Table} from "./Components/Table";
import {ButtonReset} from "./Components/ButtonReset";
import {ButtonIncrement} from "./Components/ButtonIncrement";
import {NewTable} from "./Components/NewTable";
import {ButtonSet} from "./Components/ButtonSet";

export function App() {
    const [inc, setInc] = useState(0)
    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [isCounter, setIsCounter] = useState(false);

    // значение при котором дизэйблится кнопка set
    let disableSet = maxValue <= startValue || inc < 0 || maxValue < 0 || startValue < 0
    // значение при котором будет ошибка
    let valIncorrect = startValue < 0 || startValue >= maxValue || maxValue < 0

    let onButonClick = () => {
        setInc(inc + 1)
    }
    const setCountStart = () => {
        setInc(startValue)
    }
    //функция при нажатии на "SET" будет меняться значение на экране с числом
    // в зависимости от которого (тру или фолс) будет меняться
    const buttonValue = () => {
        setIsCounter(true)
    }

    const SetInc = () => {
        setInc(startValue)
    }
    return (
        <div className="App">
            <div className="Window">
                <div className="Table">
                    <Table
                        inc={inc}
                        setInc={setInc}
                        maxValue={maxValue}
                        valIncorrect={valIncorrect}
                        isCounter={isCounter}
                    />

                    <div className="ButtonBlock">
                        <ButtonIncrement inc={inc}
                                         setInc={setInc}
                                         onButonClick={onButonClick}
                                         maxValue={maxValue}
                        />
                        <ButtonReset inc={inc}
                                     startValue={startValue}
                                     SetInc={SetInc}/>
                    </div>
                </div>
                <div className="Table">
                    <NewTable setMaxValue={setMaxValue}
                              SetIsCounter={setIsCounter}
                              setStartValue={setStartValue}
                    />
                    <ButtonSet setCountStart={setCountStart}
                               disableSet={disableSet}
                               buttonValue={buttonValue}
                    />
                </div>
            </div>
        </div>);
}
