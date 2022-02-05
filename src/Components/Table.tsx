import React, {useEffect} from "react";

export type TablePropsType = {
    inc: number
    setInc: (inc: number) => void
    maxValue: number
    valIncorrect: boolean
    isCounter: boolean
}

export const Table = (props: TablePropsType) => {
//localstorage
    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            props.setInc(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(props.inc))
    }, [props.inc])

    return (
        // если выполнилось некоректное условие  "valIncorrect" - то число на экране красное, иначе обычное!
        <div className={props.valIncorrect || props.inc === props.maxValue ? "NumberRed" : "Number"}>
            {/*если стейт "isCounter" тру - применяется класс "Number" и из пропсов приходит значение счетчика,
            иначе применяется стиль "pressValue" и если "valIncorrect" тру, то появляется надпись  "Incorrect value"
            иначе "press SET*/}

            {props.isCounter ?
                <div className="Number">{props.inc}</div> :
                <div className="pressValue"> {props.valIncorrect ?
                    "Incorrect value" :
                    "Enter value and press SET"} </div>}
        </div>
    )
};