import React, { useState } from 'react';
import './Task.css';

const Task = () => {
  const [task, setTask] = useState({
    startDate: '',
    endDate: '',
    taskName: '',
    description: '',
    priority: 'low',
    assignedTo: '',
  });

  const employees = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task submitted:', task);
    // Handle task submission logic here
  };

  const handleSave = () => {
    console.log('Task saved:', task);
    // Handle task save logic here
  };

  const handleDiscard = () => {
    setTask({
      startDate: '',
      endDate: '',
      taskName: '',
      description: '',
      priority: 'low',
      assignedTo: '',
    });
    console.log('Task discarded');
  };

  return (
    <div className="add-task-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={task.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={task.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="taskName">Task Name:</label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            value={task.taskName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleChange}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="assignedTo">Assign To:</label>
          <select
            id="assignedTo"
            name="assignedTo"
            value={task.assignedTo}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select employee</option>
            {employees.map((employee, index) => (
              <option key={index} value={employee}>{employee}</option>
            ))}
          </select>
        </div>
        <div className="button-group">
          <button type="submit">Send</button>
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={handleDiscard}>Discard</button>
        </div>
      </form>
    </div>
  );
};

export default Task;
