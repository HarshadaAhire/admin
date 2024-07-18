import React, { useState } from 'react';
import './Createproject.css';
import { FaImages } from 'react-icons/fa';

const Createproject = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [status, setStatus] = useState('Private');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [label, setLabel] = useState('High');
  const [budget, setBudget] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [team, setTeam] = useState('');

  const handleSave = () => {
    // Logic to save the project
    console.log('Project saved');
  };

  const handleCancel = () => {
    // Logic to cancel the project creation
    console.log('Project creation canceled');
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="form-container">
      <div className="left-section">
        <div className="avatar-section">
          <label>Add Avatar Images</label>
          <input type="file" id="avatarInput" style={{ display: 'none' }} onChange={handleAvatarChange} />
          <div className="avatar-placeholder" onClick={() => document.getElementById('avatarInput').click()}>
            {avatar ? <img src={avatar} alt="Avatar" /> : <FaImages className="gallery-icon" />}
          </div>
          <button className="add-avatar-btn" onClick={() => document.getElementById('avatarInput').click()}>+</button>
        </div>
        <div className="team-section">
          <label>Team Members</label>
          <div className="category-select">
            <label>Category</label>
            <select value={team} onChange={(e) => setTeam(e.target.value)}>
              <option value="">Select</option>
              <option value="joes-team">Joe's Team</option>
              <option value="jonathan-team">Jonathan's Team</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="team-avatars">
            {/* Add team member avatars here */}
    <img src="https://via.placeholder.com/40" alt="Team Member 1" />
    <img src="https://via.placeholder.com/40" alt="Team Member 2" />
    <img src="https://via.placeholder.com/40" alt="Team Member 3" />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="form-group">
          <label>Project Name</label>
          <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} placeholder="Enter Title" />
        </div>
        <div className="form-group">
          <label>Project Description *</label>
          <textarea value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} placeholder="Enter Description"></textarea>
        </div>
        <div className="form-group">
          <label>Status *</label>
          <div className="status-options">
            <label>
              <input type="radio" value="Private" checked={status === 'Private'} onChange={(e) => setStatus(e.target.value)} /> Private
            </label>
            <label>
              <input type="radio" value="Team" checked={status === 'Team'} onChange={(e) => setStatus(e.target.value)} /> Team
            </label>
            <label>
              <input type="radio" value="Public" checked={status === 'Public'} onChange={(e) => setStatus(e.target.value)} /> Public
            </label>
          </div>
        </div>
        <div className="form-group">
          <div className="date-group">
            <label>Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="date-group">
            <label>Due Date</label>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Label</label>
          <select value={label} onChange={(e) => setLabel(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="form-group">
          <label>Budget</label>
          <input type="text" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter Project Budget" />
        </div>
        <div className="form-actions">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Createproject;
