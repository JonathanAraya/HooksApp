import React, { useState, useEffect } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {



    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        //console.log('hey!')
    }, []);

    useEffect(() => {
        //console.log('formState!')
    }, [formState]);

    useEffect(() => {
        //console.log('email!')
    }, [email]);

    const handleInputChange = ({target}) =>{

        setformState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Tu Nombre" autoComplete="off" value={name} onChange={handleInputChange}></input>
            </div>

            <div className="form-group">
                <input type="text" name="email" className="form-control" placeholder="email@email.com" autoComplete="off" value={email} onChange={handleInputChange}></input>
            </div>

            { (name === 'jonathan') && <Message />}
        </>
    )
}
