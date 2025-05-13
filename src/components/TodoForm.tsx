import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
          aria-label="New todo text"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Add todo"
        >
          <Plus size={20} />
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
