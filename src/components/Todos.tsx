import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"
//React.FC è il type per i functional component
//scrivendo la sintassi dei generics a React.FC ho la possibilità di unire le mie custom props come items con la prop speciale children,
//che altrimenti avrei problemi a definire
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => (<TodoItem key={item.id} todoText={item.text} />))}
        </ul>
    )
}

export default Todos