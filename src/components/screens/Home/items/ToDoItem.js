import React from 'react'
import Checkbox from './Checkbox'
import { FaRegTrashCan } from 'react-icons/fa6'

const ToDoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full">
      <button className="flex items-center" onClick={() => changeTodo(todo._id)}>
        <Checkbox isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? ' line-through' : ''}>{todo.title}</span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <FaRegTrashCan
          size={22}
          className="text-gray-600 hover:text-pink-400 transition-colors duration-500"
        />
      </button>
    </div>
  )
}

export default ToDoItem
