import { addTodo } from '@/action/todos';
import ListItem from '@/components/ListItem';
import React from 'react'
import { FaPlus } from 'react-icons/fa';

async function todos() { 
  let res = await fetch('http://localhost:3000/api/todos',{
    cache: 'no-cache'
  })
  res = await res.json()

return (
  <div className="border w-2/3 m-auto p-5 min-h-screen bg-gradient-to-r from-yellow-300 via-teal-100 to-green-200">
      <h1 className="font-bold text-center text-5xl m-5 p-5 text-teal-900">My Todo List</h1>
      <form
          className="mx-auto w-2/3 flex gap-2 mb-6"
          action={addTodo}
      >
          <input
              type="text"
              placeholder="Add a new task"
              name="todo"
              className="border-2 p-2 flex flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
              type="submit"
              className="bg-yellow-500 rounded-lg p-2 px-4 transition duration-300 ease-in-out hover:bg-yellow-400 transform hover:scale-105 flex items-center gap-2"
          >
              <FaPlus />
              Add Todo
          </button>
      </form>
      <div className="space-y-4">
      {res.data?.map((todo, index) => (
              <div key={index} className="transform transition-all duration-500 ease-in-out">
                  <ListItem todo={todo} />
              </div>
          ))}
      </div>
  </div>
);
}
export default todos
