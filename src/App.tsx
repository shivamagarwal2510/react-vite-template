import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false
      }
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Todo List</h1>
        
        <TodoForm addTodo={addTodo} />
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-700">Tasks</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {todos.length} {todos.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>
          
          <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
