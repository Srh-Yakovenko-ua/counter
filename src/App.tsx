import React, {useState} from 'react';
import './App.css';
import {DisplayCounter} from './Counter/DisplayCounter/DisplayCounter';
import {UniversalButton} from './UniversalButton/UniversalButton';

function App() {
    const RESET_VALUE = 0;
    const MAX_VALUE = 5;
    const [counter, setCounter] = useState<number>(RESET_VALUE);

    const increment = () => setCounter(counter + 1)
    const reset = () => setCounter(RESET_VALUE)

    const disabledIncButton = (counter === MAX_VALUE);
    const disabledResetButton = (counter === RESET_VALUE);

    return (
        <div className={'mainWrapper'}>
            <DisplayCounter counter={counter} MAX_VALUE={MAX_VALUE}/>
            <div className={'buttonWrapper'}>
                <UniversalButton name={'inc'}
                                 onClick={increment}
                                 disabled={disabledIncButton}/>
                <UniversalButton name={'reset'}
                                 onClick={reset}
                                 disabled={disabledResetButton}/>
            </div>


        </div>
    );
}

export default App;
