import React, {useEffect} from "react";
import s from './Counter.module.css'

export type TablePropsType = {
    inc: number
    setInc: (inc: number) => void
}

export const Table = (props: TablePropsType) => {

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

    let onButonClick = () => {
        props.setInc(props.inc + 1)
    }

    return (
        <div className={s.window}>
            <div className={s.table}>
                <div className={props.inc === 5 ? s.newNumberStyle : s.number}> {props.inc} </div>
                <div className={s.buttonBlock}>


                    <button className={props.inc === 5 ? s.newIncStyle : s.incStyle}
                            disabled={props.inc === 5}
                            onClick={onButonClick}>Inc
                    </button>
                    <button className={props.inc === 0 ? s.newResStyle : s.resStyle}
                            disabled={props.inc === 0}
                            onClick={() => props.setInc(0)}>Reset
                    </button>
                </div>
            </div>
        </div>
    )
};