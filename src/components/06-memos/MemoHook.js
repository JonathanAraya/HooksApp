import React, { useMemo, useState } from 'react'
import { hardProcess } from '../../helpers/hardProcess';
import { useCounter } from '../../hooks/useCounter'

import '../02-useEffect/effects.css'

export const MemoHook = () => {
    
    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true)

    const memoHardProcess = useMemo(() => hardProcess(counter), [counter]);
    
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr/>

            <p> { memoHardProcess } </p>

            <button className="btn btn-primary" onClick={increment}>
                +1
            </button>

            <button 
                className="btn btn-outline-primary ml-3" 
                onClick={ ()=> {
                    setShow( !show );
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
