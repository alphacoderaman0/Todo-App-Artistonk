"use client";
import { useState } from "react";
import { useTodos } from "@/context/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleSave = () => {
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li
      className={`flex items-center justify-between p-5 rounded-3xl transition-all duration-300 ${todo.completed ? "bg-gray-50/50 dark:bg-gray-800/30" : "bg-white dark:bg-gray-800 shadow-md shadow-blue-500/5"}`}
    >
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-6 h-6 rounded-full cursor-pointer accent-blue-600"
        />
        {isEditing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            className="bg-transparent border-b-2 border-blue-500 outline-none w-full dark:text-white"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg font-medium transition-all ${
              todo.completed
                ? "line-through text-gray-400 dark:text-gray-500"
                : "text-slate-800 dark:text-gray-100" // Added text-slate-800
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-gray-400 hover:text-blue-500 transition-colors p-2"
          title="Edit Task"
        >
          ✎
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-gray-400 hover:text-red-500 transition-colors p-2"
          title="Delete Task"
        >
          🗑
        </button>
      </div>
    </li>
  );
}
