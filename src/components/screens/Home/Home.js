import React, { useState } from 'react'
import ToDoItem from './items/ToDoItem'
import CreateTodoField from './CreateTodoField/CreateTodoField'

const data = [
  {
    _id: 1,
    title: 'Do my Homework',
    isCompleted: false,
  },
  {
    _id: 2,
    title: 'Do my Homework',
    isCompleted: false,
  },
  {
    _id: 3,
    title: 'Do my Homework',
    isCompleted: false,
  },
  {
    _id: 4,
    title: 'Do my Homework',
    isCompleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find((t) => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id))
  }

  return (
    <div className=" text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Todo for junior</h1>
      {todos.map((todo) => (
        <div key={todo._id}>
          <ToDoItem todo={todo} changeTodo={changeTodo} removeTodo={removeTodo} />
        </div>
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home
