import React, {ChangeEvent} from 'react';
import classes from './DisplaySecondCounter.module.css'

type DisplaySecondCounterType = {
    text: string
    type: string
    valueSecondDisplay: string
    setValue: (value: string) => void
}

export const DisplaySecondCounter: React.FC<DisplaySecondCounterType> = (props) => {
    const {text, type, valueSecondDisplay, setValue} = props

    const onChangeSetHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div className={classes.displaySecond}>
            <span>{`${text}:`}</span>
            <input type={type}
                   value={valueSecondDisplay}
                   onChange={onChangeSetHandler}/>
        </div>
    );
};

