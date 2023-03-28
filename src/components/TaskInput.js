import React, { useState } from 'react';

function TaskInput({ handleSave }) {
  const [date, setDate] = useState('');
  const [thoughts, setThoughts] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave(date, thoughts);
    setDate('');
    setThoughts('');
  };

  const today = new Date().toISOString().split('T')[0]; // get today's date in yyyy-mm-dd format

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} min={today} onChange={(event) => setDate(event.target.value)} />
      <br />
      <label htmlFor="thoughts">Task List:</label>
      <textarea id="thoughts" value={thoughts} onChange={(event) => setThoughts(event.target.value)} />
      <br />
      <button type="submit">Save</button>
    </form>
  );
}

export default TaskInput;
