import React from 'react';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p className="text-gray-500">No tasks yet. Add one above!</p>
      </div>
    );
  }
  
  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
