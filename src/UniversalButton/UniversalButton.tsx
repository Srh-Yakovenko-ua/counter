import React from 'react';
import classes from './UniversalButton.module.css'

type UniversalButton = {
    name: string
    onClick: () => void
     disabled: boolean
}

export const UniversalButton: React.FC<UniversalButton> = (props) => {
    const {name, onClick,disabled,  ...rest} = props

    return (
        <div>
            <button
                disabled={disabled}
                    className={classes.button}
                    onClick={onClick}
                    {...rest}
            >{name}</button>
        </div>
    );
};

