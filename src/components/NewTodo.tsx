import React from "react"
import { useRef, useContext } from "react"
import { TodosContext } from "../store/todos-context"
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)

     //spefico il tipo dell'input a useRef e all'interno delle parentesi metto come valore iniziale di default null
    const todoInputText = useRef<HTMLInputElement>(null)
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        //con il ! segnalo a TypeScript che un valore potenzialmente nullo qua non lo sarà di sicuro, cosi l'inference della costante enteredValue è
        // string invece di string || undefined
        const enteredValue = todoInputText.current!.value

        if(enteredValue.trim().length === 0){//se sono entrati solo spazi vuoti 
            //return an error
            return
        }

        todosCtx.addTodo(enteredValue)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="newTodo">Add a task:</label>
            <input type="text" id="newTodo" ref={todoInputText} />
            <button>Add Todo</button>
        </form>
    )
}


export default NewTodo