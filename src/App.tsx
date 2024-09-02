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

  return (
    <>
    <div>
      <NewTodo onAddToDo={addToDoHandler}/>
      <Todos items={todos}/>
    </div>
    </>
  )
}

export default App
