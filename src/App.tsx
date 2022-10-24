import React, {useEffect} from 'react';
import './App.css';
import {DisplayCounter} from './Counter/DisplayCounter/DisplayCounter';
import {UniversalButton} from './UniversalButton/UniversalButton';
import {DisplayInputSettingCounter} from './Counter/DisplayForTheSecondCounter/DisplayInputSettingCounter';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from './state/store';
import {
    correctValueAC, incorrectValueAC,
    incrementAC,
    initialStateType, maxValueSettingAC,
    resetAC,
    setStartValueSettingAC,
    startValueSettingAC
} from './state/counterRedux';


function App() {

    const counterState = useSelector<RootStateType, initialStateType>(state => state.counter);
    const dispatch = useDispatch();

    useEffect(() => {
        if (counterState.maxValueInputDisplay > 0 || counterState.startValueInputDisplay > 0) {
            dispatch(correctValueAC((`Enter values and press 'Set' `)))
        }
    }, [counterState.maxValueInputDisplay, counterState.startValueInputDisplay])


    useEffect(() => {
        dispatch(incorrectValueAC(''))
        if (counterState.maxValueInputDisplay < 0
            || counterState.startValueInputDisplay < 0
            || counterState.maxValueInputDisplay === counterState.startValueInputDisplay
            || counterState.startValueInputDisplay > counterState.maxValueInputDisplay) {
            dispatch(incorrectValueAC('Incorrect value'))
        }
    }, [counterState.maxValueInputDisplay, counterState.startValueInputDisplay])

    const errorBothInput = counterState.maxValueInputDisplay === counterState.startValueInputDisplay || counterState.startValueInputDisplay > counterState.maxValueInputDisplay ? 'errorBothInput' : ''


    const increment = () => {
        dispatch(incrementAC(counterState.valueCounter + 1))
    }
    const reset = () => {
        dispatch(resetAC())
    }

    const setInput = () => {
        dispatch(setStartValueSettingAC(counterState.startValueInputDisplay))
    }


    const disabledSetButton = counterState.counterText.incorrectValue !== '' || !counterState.counterText.correctValue
    const disabledIncButton = (counterState.valueCounter === counterState.maxValueInputDisplay) || counterState.counterText.incorrectValue !== '' || counterState.counterText.correctValue !== ''
    const disabledResetButton = (counterState.valueCounter === 0)

    const getStartValueFromInput = (startValue: number) => {
        dispatch(startValueSettingAC(startValue))
    }
    const getMaxValueFromInput = (maxValue: number) => {
        dispatch(maxValueSettingAC(maxValue))
    }
    return (
        <>
            <div className={'mainWrapper'}>
                <DisplayCounter
                    counterDisplay={counterState.valueCounter}
                    MAX_VALUE={counterState.maxValueInputDisplay}
                    incorrectValue={counterState.counterText.incorrectValue}
                    correctValue={counterState.counterText.correctValue}

                />
                <div className={'buttonWrapper'}>
                    <UniversalButton name={'inc'}
                                     onClick={increment}
                                     disabled={disabledIncButton}
                    />
                    <UniversalButton name={'reset'}
                                     onClick={reset}
                                     disabled={disabledResetButton}
                    />
                </div>
            </div>

            <div className={'secondWrapper'}>
                <div className={'inputWrapper'}>
                    <DisplayInputSettingCounter text={'max value'}
                                                type={'number'}
                                                valueInputSettingDisplay={counterState.maxValueInputDisplay}
                                                errorBothInput={errorBothInput}
                                                getValue={getMaxValueFromInput}

                    />
                    <DisplayInputSettingCounter text={'start value'}
                                                type={'number'}
                                                valueInputSettingDisplay={counterState.startValueInputDisplay}
                                                errorBothInput={errorBothInput}
                                                getValue={getStartValueFromInput}

                    />
                </div>

                <div className={'buttonWrapperSet'}>
                    <UniversalButton name={'Set'}
                                     onClick={setInput}
                                     disabled={disabledSetButton}
                    />
                </div>

            </div>

        </>
    );
}

export default App;


//
// useEffect(() => {
//     const max_value = localStorage.getItem('maxValueInputDisplay')
//     if (max_value) {
//         setMaxValueInputDisplay(JSON.parse(max_value))
//     }
//     const start_value = localStorage.getItem('startValueInputDisplay')
//     if (start_value) {
//         setStartValueInputDisplay(JSON.parse(start_value))
//     }
// }, [])
//
// useEffect(() => {
//     localStorage.setItem('maxValueInputDisplay', JSON.stringify(maxValueInputDisplay))
//     localStorage.setItem('startValueInputDisplay', JSON.stringify(startValueInputDisplay))
// }, [maxValueInputDisplay, startValueInputDisplay])


// const [maxValueInputDisplay, setMaxValueInputDisplay] = useState<number>(0)
// const [startValueInputDisplay, setStartValueInputDisplay] = useState<number>(0)
//
// const RESET_VALUE = 0;
// const [counter, setCounter] = useState<number>(startValueInputDisplay);
//
//
// const [incorrectValue, setIncorrectValue] = useState<string>('')
// const [correctValue, setCorrectValue] = useState<string>('')


//
// const disabledSetButton = incorrectValue !== '' || !correctValue
// const disabledIncButton = (counter === maxValueInputDisplay) || incorrectValue !== '' || correctValue !== ''
// const disabledResetButton = (counter === RESET_VALUE)