"use client";
import { useTodos } from "@/context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, currentPage, setCurrentPage, totalPages } = useTodos();

  return (
    <div className="space-y-6">
      <ul className="space-y-3 min-h-[250px]">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            // Yahan dark:text-gray-300 add kiya hai taaki text black na rahe
            className="p-2 text-sm font-semibold text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            ← Previous
          </button>

          {/* Yahan dark:text-white add kiya hai */}
          <span className="text-sm font-bold text-gray-700 dark:text-white">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="p-2 text-sm font-semibold text-gray-600 dark:text-gray-300 disabled:opacity-30 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
