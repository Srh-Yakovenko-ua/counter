import React from 'react';
import classes from './DisplayCounter.module.css'

type DisplayCounter = {
    counter: number
    MAX_VALUE: number
    incorrectValue: string
    correctValue: string
}

export const DisplayCounter: React.FC<DisplayCounter> = (props) => {
    const {
        counter,
        MAX_VALUE,
        incorrectValue,
        correctValue
    } = props;

    const colorCounter = counter === MAX_VALUE ? classes.red : classes.def;


    return (
        <div className={classes.displayCounter}>
            {incorrectValue ? <span className={classes.red}>{incorrectValue}</span> :
                correctValue ? <span className={classes.correctValue}>{correctValue}</span> :
                    <span className={colorCounter}>{counter}</span>}

        </div>
    );
};

