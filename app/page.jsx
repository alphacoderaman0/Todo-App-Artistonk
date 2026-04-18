"use client";
import { TodoProvider, useTodos } from "@/context/TodoContext";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoStats from "@/components/TodoStats";
import TodoControls from "@/components/TodoControls";

function AppUI() {
  const { isDarkMode, setIsDarkMode } = useTodos();

  return (
    <main
      className={`min-h-screen transition-colors duration-500 py-10 px-4 ${isDarkMode ? "bg-[#0f172a]" : "bg-[#f1f5f9]"}`}
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center px-4">
          <h1
            className={`text-4xl font-black tracking-tight ${isDarkMode ? "text-white" : "text-slate-900"}`}
          >
            MY TASKS
          </h1>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-2xl bg-white dark:bg-gray-800 shadow-xl transition-transform active:scale-90"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>

        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 shadow-2xl border border-white/20 dark:border-gray-800 space-y-8">
          <TodoStats />
          <TodoInput />
          <TodoControls />
          <TodoList />
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
