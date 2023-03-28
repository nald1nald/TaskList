import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleSave = (date, thoughts) => {
    const newTask = { date, thoughts };
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  };

  const handleUpdate = (index) => {
    const taskToUpdate = tasks[index];
    const updatedDate = prompt('Enter new date:', taskToUpdate.date);
    const updatedThoughts = prompt('Enter new thoughts:', taskToUpdate.thoughts);
    if (updatedDate && updatedThoughts) {
      const updatedTask = { ...taskToUpdate, date: updatedDate, thoughts: updatedThoughts };
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1, updatedTask);
      setTasks(updatedTasks);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  const handleDelete = (index) => {
    const filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks(filteredTasks);
    localStorage.setItem('tasks', JSON.stringify(filteredTasks));
  };

  return (
    <div>
      <h1>Task List </h1>
      <TaskInput handleSave={handleSave} />
      <TaskList 
      tasks={tasks} 
      handleUpdate={handleUpdate} 
      handleDelete={handleDelete} />
    </div>
  );
}

export default App;
