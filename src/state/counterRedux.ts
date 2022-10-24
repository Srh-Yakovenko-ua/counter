import React from 'react';

interface errorCounterTextType {
    incorrectValue: string
    correctValue: string
}

interface initialStateType {
    maxValueInputDisplay: number
    startValueInputDisplay: number
    valueCounter: number
    counterErrorText: errorCounterTextType
}


const initialState: initialStateType = {
    maxValueInputDisplay: 0,
    startValueInputDisplay: 0,
    valueCounter: 0,
    counterErrorText: {
        incorrectValue: '',
        correctValue: '',
    }
}


export const counterRedux = (state: initialStateType, action: any): initialStateType => {
    switch (action.type) {
        default:
            return state
    }
}