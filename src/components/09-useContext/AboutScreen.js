import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogout = () =>{
        setUser({});
    }

    return (
        <div>
            <h1>About</h1>
            <hr />

            <p>
                Id: { user.id }
            </p>
            <p>
                Name: { user.name }
            </p>

            <button
                className="btn btn-danger"
                onClick={ handleLogout }
            >
                Logout
            </button>

        </div>
    )
}
