import React from 'react';
import classes from './DisplayCounter.module.css'

type DisplayCounter = {
    counterDisplay: number
    MAX_VALUE: number
    incorrectValue: string
    correctValue: string
}

export const DisplayCounter: React.FC<DisplayCounter> = (props) => {
    const {
        counterDisplay,
        MAX_VALUE,
        incorrectValue,
        correctValue
    } = props;

    const colorCounter = counterDisplay === MAX_VALUE ? classes.red : classes.def;


    return (
        <div className={classes.displayCounter}>
            {incorrectValue ? <span className={classes.red}>{incorrectValue}</span> :
                correctValue ? <span className={classes.correctValue}>{correctValue}</span> :
                    <span className={colorCounter}>{counterDisplay}</span>}

        </div>
    );
};

