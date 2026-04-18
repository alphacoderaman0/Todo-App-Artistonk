"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toast, setToast] = useState(null);
  const itemsPerPage = 5;

  useEffect(() => {
    const savedTheme = localStorage.getItem("todo-theme");
    if (savedTheme === "dark") setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("todo-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("todo-theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("todo-pro-data");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todo-pro-data", JSON.stringify(todos));
  }, [todos]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addTodo = (text) => {
    if (!text.trim()) {
      showToast("Task cannot be empty!", "error");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      date: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    showToast("Task added successfully!");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
    showToast("Status updated!");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    showToast("Task deleted!", "error");
  };

  const editTodo = (id, newText) => {
    if (!newText.trim()) {
      showToast("Edit cannot be empty!", "error");
      return;
    }
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t)),
    );
    showToast("Task updated!");
  };

  const processedTodos = useMemo(() => {
    let result = [...todos];
    if (filter === "Completed") result = result.filter((t) => t.completed);
    if (filter === "Pending") result = result.filter((t) => !t.completed);
    if (searchQuery) {
      result = result.filter((t) =>
        t.text.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    result.sort((a, b) =>
      sortOrder === "Newest" ? b.date - a.date : a.date - b.date,
    );
    return result;
  }, [todos, filter, searchQuery, sortOrder]);

  const totalPages = Math.ceil(processedTodos.length / itemsPerPage);
  const paginatedTodos = processedTodos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <TodoContext.Provider
      value={{
        todos: paginatedTodos,
        totalTodos: todos,
        filter,
        setFilter,
        searchQuery,
        setSearchQuery,
        sortOrder,
        setSortOrder,
        currentPage,
        setCurrentPage,
        totalPages,
        toast,
        addTodo,
        toggleTodo,
        deleteTodo,
        editTodo,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
      {toast && (
        <div
          className={`fixed bottom-5 right-5 px-6 py-3 rounded-2xl shadow-2xl transition-all animate-bounce z-50 text-white font-bold ${toast.type === "error" ? "bg-red-500" : "bg-green-500"}`}
        >
          {toast.message}
        </div>
      )}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
