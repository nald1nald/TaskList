import React from 'react';

function TaskList({ tasks, handleUpdate, handleDelete }) {
  return (
    <ol>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>{task.date}</div>
          <div>{task.thoughts}</div>
          <div>
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default TaskList;
