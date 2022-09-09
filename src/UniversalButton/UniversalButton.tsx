import React from 'react';
import s from './UniversalButton.module.css'

type UniversalButton = {
    name: string
    onClick: () => void
    disabled : boolean
}


const UniversalButton = (props: UniversalButton) => {
    const {name, onClick, disabled} = props

    const onClickChangeHandler = ()=>{
        onClick()
    }


    return (
        <div className={s.block}>
            <button disabled={props.disabled} className={s.button}  onClick={onClickChangeHandler}>{name}</button>
        </div>
    );
};

export default UniversalButton;