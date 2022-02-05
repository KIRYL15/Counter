import React from 'react';

type ButtonResetType = {
    inc: number
    SetInc: () => void
    startValue: number
}
export const ButtonReset = (props: ButtonResetType) => {
    return (
        <div>
            <button className="ButtonStyle"
                    disabled={props.inc === 0 || props.inc === props.startValue}
                    onClick={props.SetInc}>
                Reset
            </button>
        </div>
    );
};
