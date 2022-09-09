import React from 'react';
import s from './DisplayCounter.module.css'

type DisplayCounter = {
    counter: number
}

export const DisplayCounter = (props: DisplayCounter) => {
    const {counter} = props;
    const color = counter === 5 ? s.red : s.def;

    return (
        <div className={s.block}>
            <span className={color}>{counter}</span>
        </div>
    );
};

