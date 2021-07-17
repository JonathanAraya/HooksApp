import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    
    const { setUser } = useContext(UserContext)
    
    const userLogin = {
        id: 123,
        name: 'Jonathan'
    }

    return (
        <div>
            <h1>login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => setUser( userLogin ) } 
            >
                Login
            </button>
        </div>
    )
}
