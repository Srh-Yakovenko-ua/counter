type ActionType = ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof startValueSettingAC>
    | ReturnType<typeof maxValueSettingAC>
    | ReturnType<typeof incorrectValueAC>
    | ReturnType<typeof correctValueAC>
    | ReturnType<typeof setStartValueSettingAC>

interface errorCounterTextType {
    incorrectValue: string
    correctValue: string
}

export interface initialStateType {
    maxValueInputDisplay: number
    startValueInputDisplay: number
    valueCounter: number
    counterText: errorCounterTextType
}


const initialState: initialStateType = {
    maxValueInputDisplay: 0,
    startValueInputDisplay: 0,
    valueCounter: 0,
    counterText: {
        incorrectValue: '',
        correctValue: '',
    }
}


export const counterRedux = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, valueCounter: action.payload.increment}
        case 'RESET' :
            return {...state, valueCounter: 0}
        case 'START_VALUE_SETTING':
            return {
                ...state,
                startValueInputDisplay: action.payload.startValue,
            }
        case 'MAX_VALUE_SETTING':
            return {...state, maxValueInputDisplay: action.payload.maxValue}
        case 'INCORRECT_TEXT':
            return {...state, counterText: {...state.counterText, incorrectValue: action.payload.incorrectText}}
        case 'CORRECT_TEXT':
            return {...state, counterText: {...state.counterText, correctValue: action.payload.correctText}}
        case 'SET_START_VALUE_SETTING':
            return {
                ...state,
                valueCounter: action.payload.setStartValue,
                counterText: {...state.counterText, correctValue: action.payload.newCorrectValue}
            }
        default:
            return state
    }
}


export const incrementAC = (increment: number) => {
    return {
        type: 'INCREMENT' as 'INCREMENT',
        payload: {
            increment
        }
    }
}
export const resetAC = () => {
    return {
        type: 'RESET' as 'RESET'
    }
}

export const startValueSettingAC = (startValue: number) => {
    return {
        type: 'START_VALUE_SETTING' as 'START_VALUE_SETTING',
        payload: {
            startValue
        }
    }
}
export const maxValueSettingAC = (maxValue: number) => {
    return {
        type: 'MAX_VALUE_SETTING' as 'MAX_VALUE_SETTING',
        payload: {
            maxValue
        }
    }
}
export const setStartValueSettingAC = (setStartValue: number) => {
    return {
        type: 'SET_START_VALUE_SETTING' as 'SET_START_VALUE_SETTING',
        payload: {
            setStartValue,
            newCorrectValue: ''
        }
    }
}

export const incorrectValueAC = (incorrectText: string) => {
    return {
        type: 'INCORRECT_TEXT' as 'INCORRECT_TEXT',
        payload: {
            incorrectText
        }
    }
}
export const correctValueAC = (correctText: string) => {
    return {
        type: 'CORRECT_TEXT' as 'CORRECT_TEXT',
        payload: {
            correctText
        }
    }
}