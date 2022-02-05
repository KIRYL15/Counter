import {TextField} from '@material-ui/core';
import React, {ChangeEvent} from 'react';

type NewTablePropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    SetIsCounter: (value: boolean) => void
}
export const NewTable = (props: NewTablePropsType) => {
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetIsCounter(false)
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.SetIsCounter(false)
        props.setStartValue(+e.currentTarget.value)
    }
    return (
        <div className="Number">
            <TextField
                id="outlined-number"
                label="Max value"
                type="number"
                size="small"
                onChange={onChangeMaxValue}
            />
            <TextField
                id="outlined-number"
                label="Start value"
                type="number"
                size="small"
                onChange={onChangeStartValue}
            />
        </div>);
};