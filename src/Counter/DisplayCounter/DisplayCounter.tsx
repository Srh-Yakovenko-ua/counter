import React from 'react';
import classes from './DisplayCounter.module.css'

type DisplayCounter = {
    counter: number
    MAX_VALUE: number
}

export const DisplayCounter : React.FC<DisplayCounter> = (props) => {
    const {counter,MAX_VALUE} = props;
    const colorCounter = counter === MAX_VALUE ? classes.red : classes.def;

    return (
        <div className={classes.displayCounter} >
            <span className={colorCounter} >{counter}</span>
        </div>
    );
};

