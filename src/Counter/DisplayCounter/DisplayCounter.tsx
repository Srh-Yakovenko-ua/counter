import React from 'react';
import classes from './DisplayCounter.module.css'

type DisplayCounter = {
    counter: number
    MAX_VALUE: number
}

export const DisplayCounter = (props: DisplayCounter) => {
    const {counter,MAX_VALUE} = props;
    const color = counter === MAX_VALUE ? classes.red : classes.def;

    return (
        <div className={classes.block}>
            <span className={color}>{counter}</span>
        </div>
    );
};

