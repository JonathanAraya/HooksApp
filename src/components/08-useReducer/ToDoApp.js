import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'

const init = () => {
    return JSON.parse(localStorage.getItem('ToDos')) || [];
}

export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('ToDos', JSON.stringify( toDos ));
    }, [toDos]);

    const handleDelete = ( toDoId ) => {

        const actionDeleteToDo = {
            type: 'delete',
            payload: toDoId
        };

        dispatch(actionDeleteToDo);
    }

    const handleToggle = (toDoId) =>{

        dispatch({
            type: 'toggle',
            payload: toDoId
        })

    }

    const handleAddToDo = (newToDo) => {

        dispatch({
            type: 'add',
            payload: newToDo
        });

    }

    return (
        <div>
            <h1>ToDoApp ( { toDos.length } )</h1>
            <hr />

            <div className="row">

                <div className="col-6">
                    <TodoList  
                        toDos={toDos}
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>

                <div className="col-6">

                    <TodoAdd
                        handleAddToDo={ handleAddToDo }
                    />

                </div>

            </div>

        </div>
    )
}
