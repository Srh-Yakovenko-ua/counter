import React, {useEffect, useState} from 'react';
import './App.css';
import {DisplayCounter} from './Counter/DisplayCounter/DisplayCounter';
import {UniversalButton} from './UniversalButton/UniversalButton';
import {DisplayInputSettingCounter} from './Counter/DisplayForTheSecondCounter/DisplayInputSettingCounter';


function App() {
    const [maxValueInputDisplay, setMaxValueInputDisplay] = useState<number>(0)
    const [startValueInputDisplay, setStartValueInputDisplay] = useState<number>(0)

    const RESET_VALUE = 0;
    const [counter, setCounter] = useState<number>(startValueInputDisplay);


    const [incorrectValue, setIncorrectValue] = useState<string>('')
    const [correctValue, setCorrectValue] = useState<string>('')

    useEffect(() => {
        if (maxValueInputDisplay > 0 || startValueInputDisplay > 0) {
            setCorrectValue(`Enter values and press 'Set' `)
        }
    }, [maxValueInputDisplay, startValueInputDisplay])


    useEffect(() => {
        setIncorrectValue('')
        if (maxValueInputDisplay < 0
            || startValueInputDisplay < 0
            || maxValueInputDisplay === startValueInputDisplay
            || startValueInputDisplay > maxValueInputDisplay) {
            setIncorrectValue('Incorrect value')
        }
    }, [maxValueInputDisplay, startValueInputDisplay])

    const errorBothInput = maxValueInputDisplay === startValueInputDisplay || startValueInputDisplay > maxValueInputDisplay ? 'errorBothInput' : ''

    useEffect(() => {
        const max_value = localStorage.getItem('maxValueInputDisplay')
        if (max_value) {
            setMaxValueInputDisplay(JSON.parse(max_value))
        }
        const start_value = localStorage.getItem('startValueInputDisplay')
        if (start_value) {
            setStartValueInputDisplay(JSON.parse(start_value))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxValueInputDisplay', JSON.stringify(maxValueInputDisplay))
        localStorage.setItem('startValueInputDisplay', JSON.stringify(startValueInputDisplay))
    }, [maxValueInputDisplay, startValueInputDisplay])


    const increment = () => setCounter(counter + 1)
    const reset = () => setCounter(RESET_VALUE)

    const setInput = () => {
        setCounter(startValueInputDisplay)
        setCorrectValue('')
    }


    const disabledSetButton = incorrectValue !== '' || !correctValue
    const disabledIncButton = (counter === maxValueInputDisplay) || incorrectValue !== '' || correctValue !== ''
    const disabledResetButton = (counter === RESET_VALUE)


    return (
        <>
            <div className={'mainWrapper'}>
                <DisplayCounter counter={counter}
                                MAX_VALUE={maxValueInputDisplay}
                                incorrectValue={incorrectValue}
                                correctValue={correctValue}

                />
                <div className={'buttonWrapper'}>
                    <UniversalButton name={'inc'}
                                     onClick={increment}
                                     disabled={disabledIncButton}/>
                    <UniversalButton name={'reset'}
                                     onClick={reset}
                                     disabled={disabledResetButton}/>
                </div>
            </div>

            <div className={'secondWrapper'}>
                <div className={'inputWrapper'}>
                    <DisplayInputSettingCounter text={'max value'}
                                                type={'number'}
                                                valueInputSettingDisplay={maxValueInputDisplay}
                                                setValue={setMaxValueInputDisplay}
                                                setIncorrectValue={setIncorrectValue}
                                                errorBothInput={errorBothInput}

                    />
                    <DisplayInputSettingCounter text={'start value'}
                                                type={'number'}
                                                valueInputSettingDisplay={startValueInputDisplay}
                                                setValue={setStartValueInputDisplay}
                                                setIncorrectValue={setIncorrectValue}
                                                errorBothInput={errorBothInput}

                    />
                </div>

                <div className={'buttonWrapperSet'}>
                    <UniversalButton name={'Set'}
                                     onClick={setInput}
                                     disabled={disabledSetButton}/>
                </div>

            </div>

        </>
    );
}

export default App;
