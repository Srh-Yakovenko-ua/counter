import React from 'react';
import classes from './DisplayCounter.module.css'

type DisplayCounter = {
    counter: number
    MAX_VALUE: number
    incorrectValue: string

}

export const DisplayCounter: React.FC<DisplayCounter> = (props) => {
    const {counter, MAX_VALUE, incorrectValue} = props;
    const colorCounter = counter === MAX_VALUE ? classes.red : classes.def;


    return (
        <div className={classes.displayCounter}>
            {/*{incorrectValue ? incorrectValue :  suc ? suc : <span></span> }*/}
            {incorrectValue ?
                <span className={classes.red}>{incorrectValue}</span> :
                <span className={colorCounter}>{counter}</span>}
        </div>
    );
};

