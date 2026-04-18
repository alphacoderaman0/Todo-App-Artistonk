# Todo-App

# Modern React Todo Application

A high-performance, feature-rich Todo application built with **Next.js**, **Tailwind CSS**, and the **React Context API**. This project demonstrates a clean architecture, scalable folder structure, and a premium user experience with full dark mode support.

## 🚀 Key Features

- **Advanced Task Management**: Create, edit, delete, and toggle completion status.
- **Dynamic Search & Filter**: Find tasks instantly with a real-time search bar and filter by status (All, Pending, Completed).
- **Custom Sorting**: Organize tasks by newest or oldest creation date.
- **Pagination**: Smooth navigation for large task lists (5 items per page).
- **Live Statistics**: Dashboard showing total, completed, and pending task counts.
- **Dark Mode**: Integrated theme switcher with persistent settings via `localStorage`.
- **Validation & Feedback**: Real-time validation toasts for task entries and updates.
- **Data Persistence**: All tasks are saved locally, ensuring no data loss on page refresh.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **State Management**: React Context API
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: JavaScript (JSX)
- **Icons**: Custom optimized SVGs

## 📁 Project Structure

```text
/app
  ├── layout.tsx         # Root layout configuration
  ├── page.jsx           # Main application entry point
  └── globals.css        # Tailwind directives & global styles
/components
  ├── TodoInput.jsx      # Task creation component
  ├── TodoList.jsx       # Paginated list container
  ├── TodoItem.jsx       # Individual task logic (Edit/Delete/Toggle)
  ├── TodoControls.jsx   # Search, Sort, and Filter logic
  └── TodoStats.jsx      # Visual statistics dashboard
/context
  └── TodoContext.jsx    # Global state, persistence, & toast logic
/public                  # Static assets & icons
tailwind.config.js       # Custom theme & dark mode configuration