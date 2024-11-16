"use client";
import { deleteTodo, updateTodo } from '@/action/todos';
import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { FaRegSave } from 'react-icons/fa';
import { GoCheckCircle, GoXCircle } from 'react-icons/go';

function ListItem({ todo }) {
    const [isEdit, setIsEdit] = useState(false);
    const [task, setTask] = useState("");

    const onCompleted = async () => {
        let obj = { ...todo };
        obj.isCompleted = !obj.isCompleted;
        await updateTodo(obj);
    };

    const onEdit = async () => {
        if (isEdit) {
            let obj = { ...todo };
            obj.todo = task;
            await updateTodo(obj);
            setIsEdit(false);
            setTask("");
        } else {
            setIsEdit(true);
            setTask(todo.todo);
        }
    };

    const onDelete = async () => {
        await deleteTodo({ id: todo.id });
    };

    return (
        <div className={`border mx-auto cursor-pointer w-2/3 font-bold m-2 p-4 flex justify-between rounded-lg transform transition-all duration-300 ease-in-out ${
            todo.isCompleted ? 'bg-green-200' : 'bg-white'
        } hover:scale-105 hover:shadow-lg`}>
            {isEdit ? (
                <input
                    type="text"
                    className="text-2xl border-2 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Edit todo"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            ) : (
                <h2 className={`text-2xl text-center ${todo.isCompleted ? "line-through text-gray-500" : ""}`}>
                    {todo.todo}
                </h2>
            )}
            <div className='flex gap-2'>
                <button
                    onClick={onCompleted}
                    className="bg-teal-400 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    title={todo.isCompleted ? "Mark as Incomplete" : "Mark as Complete"}
                >
                    {todo.isCompleted ?  <GoXCircle /> : <GoCheckCircle />}
                </button>
                <button
                    onClick={onEdit}
                    className="bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    title={isEdit ? "Save Changes" : "Edit Todo"}
                >
                    {isEdit? <FaRegSave /> : <AiOutlineEdit />}
                </button>
                <button
                    onClick={onDelete}
                    className="bg-red-400 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    title="Delete Todo"
                >
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
}

export default ListItem;
