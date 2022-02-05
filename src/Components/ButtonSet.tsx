import React from 'react';

type ButtonSetPropsType = {
    setCountStart: () => void
    disableSet: boolean
    buttonValue: () => void
}
export const ButtonSet = (props: ButtonSetPropsType) => {
    const onClickSetHandler = () => {
        props.setCountStart()
        props.buttonValue()
    }

    return (
        <div className="ButtonBlock">
            <button className="ButtonStyle"
                    onClick={onClickSetHandler}
                    disabled={props.disableSet}
            >SET
            </button>
        </div>);
};