import React from 'react';
import classes from './DisplaySecondCounter.module.css'

type DisplaySecondCounterType = {
    text: string
    type: string
    value : number
}

export const DisplaySecondCounter: React.FC<DisplaySecondCounterType> = (props) => {
    const {text, type,value} = props



    return (
        <div className={classes.displaySecond}>
            <span>{`${text}:`}</span>
            <input type={type} value={value}/>
        </div>
    );
};

