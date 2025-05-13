import React from 'react';
import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-200 transition-all hover:shadow-md">
      <div className="flex items-center flex-1">
        <button 
          onClick={() => toggleTodo(todo.id)}
          className={`flex items-center justify-center w-6 h-6 rounded-full mr-3 border ${
            todo.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300'
          }`}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {todo.completed && <Check size={16} />}
        </button>
        <span 
          className={`text-gray-800 ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition-colors p-1 rounded-full hover:bg-red-50"
        aria-label="Delete todo"
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
};

export default TodoItem;
