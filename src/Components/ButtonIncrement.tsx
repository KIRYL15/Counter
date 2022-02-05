import React from 'react';

type ButtonIncrementPropsType = {
    inc: number
    setInc: (inc: number) => void
    onButonClick: () => void
    maxValue: number
}
export const ButtonIncrement = (props: ButtonIncrementPropsType) => {
    return (
        <div>
            <button className="ButtonStyle"
                    disabled={props.inc === props.maxValue || props.inc === props.maxValue}
                    onClick={props.onButonClick}>
                Inc
            </button>
        </div>
    );
};
