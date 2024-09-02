import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'
import { useState } from 'react'

function App() {
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

  return (
    <>
    <div>
      <NewTodo onAddToDo={addToDoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
    </>
  )
}

export default App
