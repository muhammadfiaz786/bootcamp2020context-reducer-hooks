import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {

   let counterValue = useContext(CounterContext);

return (
    <div>
        <h2>This is first Child using CounterContext</h2>
        <h3>Counter value is: {counterValue[0]}</h3>
        <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increment Context</button>
    </div>
)
}
export default Child;