import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

import './layout.css'

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const pTag = useRef();
    const [boxSixe, setBoxSixe] = useState({})

    useLayoutEffect(() => {

        setBoxSixe( pTag.current.getBoundingClientRect() );

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-center">
                <p 
                    className="mb-0"
                    ref={pTag}
                >
                    {quote} 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSixe, null, 5 ) }
            </pre>

            <button className="btn btn-primary" onClick={increment}>
                Next Quote
            </button>

        </div>
    )
}
