import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Checkbox = ({ isCompleted }) => {
  return (
    <div
      className={`border-2 rounded-lg border-pink-400 ${
        isCompleted ? 'bg-pink-400' : ''
      } w-6 h-6 mr-3 flex items-center justify-center`}
    >
      <BsCheck size={24} className="text-zinc-800" />
    </div>
  )
}

export default Checkbox
