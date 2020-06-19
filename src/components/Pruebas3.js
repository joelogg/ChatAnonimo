import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';

export default function Chat() {

    const [number, setNum, deleteNum] = useLocalStorage('num', 0);

    console.log(number);
    
    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNum( typeof(number) === 'number'? (number + 1) : 0 )}>Increment</button>
            <button onClick={deleteNum}>Delete</button>
        </div>
    );
}
