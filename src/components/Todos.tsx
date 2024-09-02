import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"
//React.FC è il type per i functional component
//scrivendo la sintassi dei generics a React.FC ho la possibilità di unire le mie custom props come items con la prop speciale children,
//che altrimenti avrei problemi a definire
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (<TodoItem key={item.id} todoText={item.text} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)} />))}
        </ul>
    )
}

export default Todos