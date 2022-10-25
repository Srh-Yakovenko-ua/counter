import React, {ChangeEvent} from 'react';
import classes from './DisplayInputSettingCounter.module.css'


type DisplaySecondCounterType = {
    text: string
    type: string
    valueInputSettingDisplay: number
    errorBothInput: string
    getValue : (value : number)=> void
}
export const DisplayInputSettingCounter: React.FC<DisplaySecondCounterType> = React.memo((props) =>{
    const {
        text,
        type,
        valueInputSettingDisplay,
        errorBothInput,
        getValue
    } = props;

    const onChangeSetHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const rondCount = Math.round(+e.currentTarget.value)
        getValue(rondCount)
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
});

