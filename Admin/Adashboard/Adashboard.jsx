import React, { useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import './Adashboard.css';

// Register the required elements for the charts
ChartJS.register(ArcElement, Tooltip, Legend);

const Adashboard = () => {
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [totalTime, setTotalTime] = useState(null);

  const handlePunchIn = () => {
    const now = new Date();
    setPunchInTime(now);
  };

  const handlePunchOut = () => {
    const now = new Date();
    setPunchOutTime(now);
    if (punchInTime) {
      const diff = (now - punchInTime) / 1000;
      setTotalTime(diff);
    }
  };

  const pieData = {
    labels: ['Completed', 'Pending', 'Overdue'],
    datasets: [{
      data: [10, 20, 5],
      backgroundColor: ['#4CAF50', '#FFCE56', '#FF6384']
    }]
  };

  const inTimePercentage = 50; // Example percentage for in-time
  const latePercentage = 30;   // Example percentage for late
  const absentPercentage = 20; // Example percentage for absent

  return (
    <div className="adashboard">
      <h1>Hii Admin</h1>
      <p>Welcome back! Have a Good Day :)</p>
      <Link to="/EmployeeForm" className="add-employee-button no-underline">Add Employee</Link>
      
      <div className="cards">
        <div className="card">
          <h3>Project Tasks</h3>
          <p>10</p>
        </div>
        <div className="card">
          <h3>Total Employees</h3>
          <p>50</p>
        </div>
        <div className="card">
          <h3>Total Departments</h3>
          <p>5</p>
        </div>
        <div className="card">
          <h3>Total Tasks Assigned</h3>
          <p>40</p>
        </div>
        <div className="card">
          <h3>Events</h3>
          <p>3</p>
        </div>
      </div>
      
      <div className="container-section">
        <div className="container pie-container">
          <h2>Monthly Project Target</h2>
          <div className="pie-chart-wrapper">
            <Pie data={pieData} />
          </div>
        </div>
        <div className="container">
          <h2>Employee Attendance</h2>
          <div className="attendance-circles">
            <div className="attendance-circle">
              <CircularProgressbar
                value={inTimePercentage}
                styles={buildStyles({
                  pathColor: '#4CAF50',
                  trailColor: '#d6d6d6'
                })}
              />
            </div>
            <div className="attendance-circle">
              <CircularProgressbar
                value={latePercentage}
                styles={buildStyles({
                  pathColor: '#FFCE56',
                  trailColor: 'transparent'
                })}
              />
            </div>
            <div className="attendance-circle">
              <CircularProgressbar
                value={absentPercentage}
                styles={buildStyles({
                  pathColor: '#FF6384',
                  trailColor: 'transparent'
                })}
              />
            </div>
          </div>
          <div className="attendance-labels">
            <div className="label">
              <span className="label-color" style={{ backgroundColor: '#4CAF50' }}></span> In-time
            </div>
            <div className="label">
              <span className="label-color" style={{ backgroundColor: '#FFCE56' }}></span> Late
            </div>
            <div className="label">
              <span className="label-color" style={{ backgroundColor: '#FF6384' }}></span> Absent
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Attendance</h2>
          {totalTime && (
            <div>
              <p>Total Time: {Math.floor(totalTime / 3600)}h {Math.floor((totalTime % 3600) / 60)}m {Math.floor(totalTime % 60)}s</p>
            </div>
          )}
          <div className="punch-buttons">
            <button onClick={handlePunchIn}>Punch In</button>
            <button onClick={handlePunchOut}>Punch Out</button>
          </div>
          {punchInTime && (
            <p>Punch In Time: {punchInTime.toLocaleTimeString()}</p>
          )}
          {punchOutTime && (
            <p>Punch Out Time: {punchOutTime.toLocaleTimeString()}</p>
          )}
        </div>
      </div>
      
      <div className="container-section">
        <div className="container">
          <h2>Departments</h2>
          <p> 07</p>
          <ul>
            <li>HR = 05</li>
            <li>Development = 02</li>
            <li>Design = 05</li>
            <li>Sales = 15</li>
            <li>Social Media = 04</li>
            <li>Digital Marketing = 08</li>
          </ul>
          <Link to="/view-department" className="view-button no-underline">View Department</Link>
        </div>
        <div className="container">
          <h2>Employees</h2>
          <p>50</p>
          <div className="employee-list">
            <div className="employee">
              <img src="https://via.placeholder.com/150" alt="Employee 1" className="employee-profile-pic" />
              <div>
                <div className="employee-name">
                  <p>John Doe</p>
                  <p className="designation">Social Media Manager</p>
                </div>
                <p><FaEnvelope /> john@example.com</p>
              </div>
            </div>
            <div className="employee">
              <img src="https://via.placeholder.com/150" alt="Employee 2" className="employee-profile-pic" />
              <div>
                <div className="employee-name">
                  <p>Jane Smith</p>
                  <p className="designation">UI UX Designer</p>
                </div>
                <p><FaEnvelope /> jane@example.com</p>
              </div>
            </div>
            <div className="employee">
              <img src="https://via.placeholder.com/150" alt="Employee 3" className="employee-profile-pic" />
              <div>
                <div className="employee-name">
                  <p>Michael Johnson</p>
                  <p className="designation">Android Developer</p>
                </div>
                <p><FaEnvelope /> michael@example.com</p>
              </div>
            </div>
            {/* Add more employees as needed */}
          </div>
          <Link to="/view-employee" className="view-button no-underline">View Employee</Link>
        </div>
        <div className="container">
          <h2>Daily Tasks</h2>
          <div className="task">
            <img src="https://via.placeholder.com/50" alt="John Doe" className="task-profile-pic" />
            <div className="task-info">
              <p className="task-name">
                John Doe 
                <span className="task-priority high">High</span>
              </p>
              <p className="task-description">Fix bugs in the application</p>
            </div>
          </div>
          <div className="task">
            <img src="https://via.placeholder.com/50" alt="Jane Smith" className="task-profile-pic" />
            <div className="task-info">
              <p className="task-name">
                Jane Smith 
                <span className="task-priority low">Low</span>
              </p>
              <p className="task-description">Design new UI</p>
            </div>
          </div>
          <div className="task">
            <img src="https://via.placeholder.com/50" alt="Jane Smith" className="task-profile-pic" />
            <div className="task-info">
              <p className="task-name">
                Jane Smith 
                <span className="task-priority low">Low</span>
              </p>
              <p className="task-description">Design new UI</p>
            </div>
          </div>
          <div className="task">
            <img src="https://via.placeholder.com/50" alt="Michael Johnson" className="task-profile-pic" />
            <div className="task-info">
              <p className="task-name">
                Michael Johnson 
                <span className="task-priority medium">Medium</span>
              </p>
              <p className="task-description">Design admin dashboard wireframe</p>
            </div>
            
          </div>
          {/* Add more tasks as needed */}
          <Link to="/Task" className="add-task-button no-underline">Add Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Adashboard;
