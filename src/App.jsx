import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [symbol, setSymbol] = useState('');
    const [result, setResult] = useState('');

    const equals = () =>{
        const a = parseFloat(num1);
        const b = parseFloat(num2);
        let res;

        switch(symbol){
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                res = b !== 0 ? a / b : 'Error';
                break;
            default:
                res = 'Invalid operator';
        }

        setResult(res);
    };

    return(
        <>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <button onClick={equals}>=</button>
        <input readOnly value={result} onChange={(e) => setResult(e.target.value)} />
        </>
    )
}

export default App;