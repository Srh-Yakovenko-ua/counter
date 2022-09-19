import React, {useEffect, useState} from 'react';
import './App.css';
import {DisplayCounter} from './Counter/DisplayCounter/DisplayCounter';
import {UniversalButton} from './UniversalButton/UniversalButton';
import {DisplayInputSettingCounter} from './Counter/DisplayForTheSecondCounter/DisplayInputSettingCounter';

function App() {
    const RESET_VALUE = 0;
    const MAX_VALUE = 5;
    const [counter, setCounter] = useState<number>(RESET_VALUE);

    const [maxValueInputDisplay, setMaxValueInputDisplay] = useState<number>(0)
    const [startValueInputDisplay, setStartValueInputDisplay] = useState<number>(0)
    const [incorrectValue, setIncorrectValue] = useState<string>('')
    const [correctValue, setCorrectValue] = useState<string>('')

    useEffect(() => {
        setIncorrectValue('')
        if (maxValueInputDisplay > 0 || startValueInputDisplay > 0) {
            setCorrectValue(`Enter values and press 'Set' `)
        }
    }, [maxValueInputDisplay, startValueInputDisplay])


    useEffect(() => {
        setIncorrectValue('')
        if (maxValueInputDisplay < 0 || startValueInputDisplay < 0) {
            setIncorrectValue('Incorrect value')
        }
        if (maxValueInputDisplay === startValueInputDisplay) {
            setIncorrectValue('Incorrect value')
        }
        if (startValueInputDisplay > maxValueInputDisplay) {
            setIncorrectValue('Incorrect value')
        }
    }, [maxValueInputDisplay, startValueInputDisplay])

    const errorBothInput = maxValueInputDisplay === startValueInputDisplay ? 'errorBothInput' : ''

    const increment = () => setCounter(counter + 1)
    const reset = () => setCounter(RESET_VALUE)


    const disabledIncButton = (counter === MAX_VALUE);
    const disabledResetButton = (counter === RESET_VALUE);

    return (
        <>
            <div className={'mainWrapper'}>
                <DisplayCounter counter={counter}
                                MAX_VALUE={MAX_VALUE}
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
                                     onClick={() => {
                                     }}
                                     disabled={false}/>
                </div>

            </div>

        </>
    );
}

export default App;
