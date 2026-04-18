"use client";
import { useTodos } from "@/context/TodoContext";

export default function TodoControls() {
  const { filter, setFilter, searchQuery, setSearchQuery, sortOrder, setSortOrder, isDarkMode } = useTodos();

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      {/* Search Bar */}
      <div className="relative group">
        <div className="relative group">
        <input 
            type="text" 
            placeholder="Search Tasks..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-gray-100 dark:bg-gray-800 rounded-[2rem] outline-none 
                    shadow-inner border-2 border-gray-200 dark:border-gray-700 
                    focus:border-blue-500 focus:ring-4 ring-blue-500/10 transition-all 
                    font-semibold text-slate-900 dark:text-white"
        />
        <span className="absolute left-4 top-4.5 text-gray-400 dark:text-gray-500">
            🔍
        </span>
        </div>
        <span className="absolute left-4 top-4 opacity-40">🔍</span>
      </div>

      <div className="flex flex-wrap gap-3 items-center justify-between">
        {/* Filter Buttons */}
        <div className="flex bg-gray-100 dark:bg-gray-800 p-1.5 rounded-2xl shadow-inner">
          {['All', 'Pending', 'Completed'].map((f) => (
           <button 
            key={f} 
            onClick={() => setFilter(f)} 
            className={`px-5 py-2 text-xs font-black rounded-xl transition-all ${
                filter === f 
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-md scale-105' 
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-200'
            }`}
            >
            {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <select 
        value={sortOrder} 
        onChange={(e) => setSortOrder(e.target.value)}
        className="bg-gray-100 dark:bg-gray-800 text-xs font-bold px-4 py-2.5 rounded-xl 
                    outline-none shadow-inner border-2 border-gray-200 dark:border-gray-700 
                    focus:border-blue-500 focus:ring-4 ring-blue-500/10 transition-all 
                    cursor-pointer text-slate-700 dark:text-gray-300 appearance-none">
            <option value="Newest" className="bg-white dark:bg-gray-800">NEWEST FIRST</option>
            <option value="Oldest" className="bg-white dark:bg-gray-800">OLDEST FIRST</option>
        </select>
      </div>
    </div>
  );
}