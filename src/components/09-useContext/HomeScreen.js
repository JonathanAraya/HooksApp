import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <div>
            <h1>Home</h1>
            <hr />

            <p>
                Id: { user.id }
            </p>
            <p>
                Name: { user.name }
            </p>
        </div>
    )
}
