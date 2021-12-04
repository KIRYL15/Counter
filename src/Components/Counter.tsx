import React from "react";
import s from './Counter.module.css'

export type TablePropsType = {
    count: number
    setCount: (count: number) => void
}

export const Table = (props: TablePropsType) => {

    return (
        <div className={s.window}>
            <div className={s.table}>
                <div className={props.count === 5 ? s.newNumberStyle : s.number}> {props.count} </div>
                <div className={s.buttonBlock}>
                    <button className={props.count === 5 ? s.newIncStyle : s.incStyle} disabled={props.count === 5}
                            onClick={() => props.setCount(props.count + 1)}>Inc
                    </button>
                    <button className={props.count === 0 ? s.newResStyle : s.resStyle} disabled={props.count === 0}
                            onClick={() => props.setCount(0)}>Reset
                    </button>
                </div>
            </div>
        </div>

    )
}