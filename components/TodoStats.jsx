"use client";
import { useTodos } from "@/context/TodoContext";

export default function TodoStats() {
  const { totalTodos } = useTodos();
  const complete = totalTodos.filter(t => t.completed).length;
  const pending = totalTodos.length - complete;

  if (totalTodos.length === 0) return null;

  return (
    <div className="grid grid-cols-3 gap-3">
      {[
        { label: 'Total', val: totalTodos.length, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
        { label: 'Done', val: complete, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
        { label: 'Left', val: pending, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-900/20' }
      ].map((stat) => (
        <div 
        key={stat.label} 
        className={`${stat.bg} p-4 rounded-3xl text-center border border-slate-200 dark:border-transparent transition-transform hover:scale-105 shadow-sm`}
        >
        <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
        <p className="text-[10px] font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}