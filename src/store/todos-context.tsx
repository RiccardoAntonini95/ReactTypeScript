import React from "react";
import { ReactNode } from "react";
import { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[]; addTodo: (text: string) => void; removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: () => { }
})

type TodosContextProviderProps = {
    children: ReactNode;
};


const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addToDoHandler = (text: string) => {
        const newTodo = new Todo(text)
        setTodos((prevTodos) => {
            return [...prevTodos, newTodo]
        })
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((item) => item.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addToDoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider