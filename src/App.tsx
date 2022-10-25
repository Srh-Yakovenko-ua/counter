import React, {useCallback, useEffect} from 'react';
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

    const {
        maxValueInputDisplay,
        startValueInputDisplay,
        valueCounter,
        counterText: {incorrectValue, correctValue}
    } = counterState;


    useEffect(() => {
        if (maxValueInputDisplay > 0 || startValueInputDisplay > 0) {
            dispatch(correctValueAC((`Enter values and press 'Set' `)))
        }
    }, [maxValueInputDisplay, startValueInputDisplay])

    useEffect(() => {
        dispatch(incorrectValueAC(''))
        if (maxValueInputDisplay < 0
            || startValueInputDisplay < 0
            || maxValueInputDisplay === startValueInputDisplay
            || startValueInputDisplay > maxValueInputDisplay) {
            dispatch(incorrectValueAC('Incorrect value'))
        }
    }, [maxValueInputDisplay, startValueInputDisplay])

    const errorBothInput = maxValueInputDisplay === startValueInputDisplay || startValueInputDisplay > maxValueInputDisplay ? 'errorBothInput' : ''


    const increment = useCallback(() => {
        dispatch(incrementAC(valueCounter + 1))
    }, [valueCounter, maxValueInputDisplay, startValueInputDisplay])

    const reset = useCallback(() => {
        dispatch(resetAC())
    }, [valueCounter])


    const setInput = useCallback(() => {
        dispatch(setStartValueSettingAC(startValueInputDisplay))
    }, [startValueInputDisplay])


    const disabledSetButton = incorrectValue !== '' || !correctValue
    const disabledIncButton = (valueCounter === maxValueInputDisplay) || incorrectValue !== '' || correctValue !== ''
    const disabledResetButton = (valueCounter === 0)

    const getStartValueFromInput = useCallback((startValue: number) => {
        dispatch(startValueSettingAC(startValue))
    }, [startValueInputDisplay])


    const getMaxValueFromInput = useCallback((maxValue: number) => {
        dispatch(maxValueSettingAC(maxValue))
    }, [maxValueInputDisplay])

    return (
        <>
            <div className={'mainWrapper'}>
                <DisplayCounter
                    counterDisplay={valueCounter}
                    MAX_VALUE={maxValueInputDisplay}
                    incorrectValue={incorrectValue}
                    correctValue={correctValue}

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
                                                valueInputSettingDisplay={maxValueInputDisplay}
                                                errorBothInput={errorBothInput}
                                                getValue={getMaxValueFromInput}

                    />
                    <DisplayInputSettingCounter text={'start value'}
                                                type={'number'}
                                                valueInputSettingDisplay={startValueInputDisplay}
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