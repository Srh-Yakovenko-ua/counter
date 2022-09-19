import React, {ChangeEvent, useEffect} from 'react';
import classes from './DisplayInputSettingCounter.module.css'

type DisplaySecondCounterType = {
    text: string
    type: string
    valueInputSettingDisplay: number
    setValue: (value: number) => void
    setIncorrectValue: (setIncorrectValue: string) => void
    errorBothInput: string
}
export const DisplayInputSettingCounter: React.FC<DisplaySecondCounterType> = (props) => {
    const {
        text,
        type,
        valueInputSettingDisplay,
        setValue,
        errorBothInput,
    } = props;


    const onChangeSetHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }
    const errorOneOfInput = valueInputSettingDisplay < 0 ? classes.errorInput : classes.displaySecond


    return (
        <div className={classes.displaySecond}>
            <span>{`${text}:`}</span>
            <input type={type}
                   className={`${errorOneOfInput} ${errorBothInput}`}
                   value={valueInputSettingDisplay}
                   onChange={onChangeSetHandler}/>
        </div>
    );
};

