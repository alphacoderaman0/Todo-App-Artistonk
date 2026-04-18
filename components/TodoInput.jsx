"use client";
import { useState } from "react";
import { useTodos } from "@/context/TodoContext";

export default function TodoInput() {
  const [val, setVal] = useState("");
  const { addTodo } = useTodos();

  const handle = (e) => {
    e.preventDefault();
    if (val.trim()) {
      addTodo(val);
      setVal("");
    } else {
      // Logic for validation toast is handled inside the context
      addTodo("");
    }
  };

  return (
    <form onSubmit={handle} className="relative group">
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="Add a new Tasks..."
        className="w-full p-5 pr-24 bg-gray-100 dark:bg-gray-800 rounded-[2rem] outline-none  shadow-inner border-2 border-gray-200 dark:border-gray-700  focus:border-blue-500 focus:ring-4 ring-blue-500/10 transition-all  font-semibold text-slate-900 dark:text-white"
      />
      <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-[1.5rem] font-black text-xs tracking-widest transition-all active:scale-90 shadow-lg shadow-blue-500/30">
        ADD
      </button>
    </form>
  );
}
