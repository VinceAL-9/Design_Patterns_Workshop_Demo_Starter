"use client";
import React, { useState } from 'react';

// Dumb component: displays a single todo item
type TodoItemProps = {
    todo: { id: number; text: string; done: boolean };
    onToggle: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => (
    <li style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                style={{ marginRight: '0.5rem' }}
            />
            {todo.text}
        </label>
    </li>
);

// Dumb component: displays a list of todos
type TodoListProps = {
    todos: { id: number; text: string; done: boolean }[];
    onToggle: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
    </ul>
);

// Smart component: manages state and logic
const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', done: false },
        { id: 2, text: 'Build a ToDo App', done: false },
        { id: 3, text: 'Profit!', done: false },
    ]);
    const [newTask, setNewTask] = useState('');

    const handleToggle = (id: number) => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        setTodos(todos => [
            ...todos,
            {
                id: todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1,
                text: newTask.trim(),
                done: false,
            },
        ]);
        setNewTask('');
    };

    return (
        <div style={{ maxWidth: 400, margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: 8 }}>
            <h2 style={{ textAlign: 'center' }}>My ToDo List</h2>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Add a new task..."
                    style={{
                        flex: 1,
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: 4
                    }}
                />
                <button
                    onClick={handleAddTask}
                    disabled={!newTask.trim()}
                    style={{
                        background: '#0070f3',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 4,
                        padding: '0.5rem 1rem',
                        cursor: newTask.trim() ? 'pointer' : 'not-allowed'
                    }}
                >
                    Add
                </button>
            </div>
            <TodoList todos={todos} onToggle={handleToggle} />
        </div>
    );
};

export default TodoApp;
