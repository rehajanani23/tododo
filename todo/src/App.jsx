import './App.css';
import React, { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Watch series', completed: false },
    { id: 2, task: 'Complete HW', completed: false },
    { id: 3, task: 'Good sleep', completed: false },
    { id: 4, task: 'Selfcare', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, task: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;