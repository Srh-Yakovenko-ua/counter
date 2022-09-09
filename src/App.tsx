import React, {useState} from 'react';
import './App.css';
import {DisplayCounter} from './Counter/DisplayCounter/DisplayCounter';
import UniversalButton from './UniversalButton/UniversalButton';

function App() {
    let [counter, setCounter] = useState(0);


    const increment = () => setCounter(++counter)
    const zero = () => setCounter(0)

    const disabledIncButtonOrNot = counter >= 5
    const disabledResetButtonOrNot = counter === 0

    return (
        <div className={'main-content'}>
            <DisplayCounter counter={counter}/>
            <div className={'block'}>
                <UniversalButton name={'inc'}
                                onClick={increment}
                                disabled={disabledIncButtonOrNot}/>
                <UniversalButton name={'reset'} onClick={zero}
                                 disabled={disabledResetButtonOrNot}
                />
            </div>

        </div>
    );
}

export default App;
