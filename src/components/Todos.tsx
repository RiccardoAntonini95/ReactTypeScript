import React from "react"
import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"
import { useContext } from 'react'
import { TodosContext } from "../store/todos-context"
//React.FC è il type per i functional component
//scrivendo la sintassi dei generics a React.FC ho la possibilità di unire le mie custom props come items con la prop speciale children,
//che altrimenti avrei problemi a definire
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (<TodoItem key={item.id} todoText={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />))}
        </ul>
    )
}

export default Todos