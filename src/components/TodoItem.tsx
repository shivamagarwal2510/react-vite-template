import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      layout
      className={`flex items-center justify-between p-4 rounded-lg shadow-md mb-3 transition-all duration-300
        ${todo.completed ? 'bg-gray-600 line-through text-gray-400' : 'bg-gray-700 text-white'}
        hover:shadow-lg`}
    >
      <span
        className="flex-grow cursor-pointer text-lg"
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onToggle(todo.id)}
          className={`p-2 rounded-full transition-colors duration-200
            ${todo.completed ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 hover:bg-gray-400'}
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500`}
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          <Check className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
          aria-label="Delete todo"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
    </motion.li>
  );
};

export default TodoItem;
