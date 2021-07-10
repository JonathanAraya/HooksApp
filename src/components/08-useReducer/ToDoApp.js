import React, { useReducer } from 'react'
import { toDoReducer } from './toDoReducer'
import { useForm } from '../../hooks/useForm';

import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, initialState)

    const [{description}, handleInputChange] = useForm({
        description: ''
    });

    console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToDo = {
            id: new Date().getTime(),
            desc: 'Nueva Tarea',
            done: false
        };

        const actionAddToDo = {
            type: 'add',
            payload: newToDo
        }

        dispatch(actionAddToDo);
    }

    return (
        <div>
            <h1>ToDoApp ( { toDos.length } )</h1>
            <hr />

            <div className="row">

                <div className="col-6">

                <ul className="list-group list-group-flush">
                    {
                        toDos.map( (toDo, i) => (
                            <li 
                                key={toDo.id}
                                className="list-group-item"    
                            > 
                                    <p> { i + 1 }. {toDo.desc} </p>
                                    <button className="btn btn-danger">Borrar Tarea</button>
                            </li>
                        ))
                    }
                </ul>

                </div>

                <div className="col-6">

                    <h4>Agregar ToDo</h4>
                    <hr />

                    <form onSubmit={ handleSubmit } >

                        <input 
                            type="text"
                            className="form-control"
                            name="description"
                            autoComplete="off"
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 w-100"
                        >
                            Agregar
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}
