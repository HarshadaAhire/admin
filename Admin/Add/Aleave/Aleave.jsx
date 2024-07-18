import React, { useState } from 'react';
import './Aleave.css';

const leaveData = {
  wordpress: [
    { userId: 1, applyDays: 3, description: 'Medical Leave', status: 'Pending', startDate: '11 July', endDate: '13 July' },
    { userId: 2, applyDays: 1, description: 'Personal Leave', status: 'Approved', startDate: '14 July', endDate: '14 July' },
  ],
  app: [
    { userId: 3, applyDays: 5, description: 'Vacation', status: 'Rejected', startDate: '10 July', endDate: '15 July' },
    { userId: 4, applyDays: 2, description: 'Sick Leave', status: 'Pending', startDate: '16 July', endDate: '17 July' },
  ],
  sales: [
    { userId: 5, applyDays: 4, description: 'Personal Leave', status: 'Approved', startDate: '18 July', endDate: '21 July' },
    { userId: 6, applyDays: 3, description: 'Medical Leave', status: 'Pending', startDate: '22 July', endDate: '24 July' },
  ],
};

const Aleave = () => {
  const [approvedMessage, setApprovedMessage] = useState('');
  const [disabledButtons, setDisabledButtons] = useState({});

  const handleApprove = (department, leaveIndex) => {
    leaveData[department][leaveIndex].status = 'Approved';
    setApprovedMessage(`Approved leave for User ID ${leaveData[department][leaveIndex].userId}`);
    setDisabledButtons((prevState) => ({
      ...prevState,
      [`${department}-${leaveIndex}`]: true,
    }));
  };

  const handleReject = (department, leaveIndex) => {
    leaveData[department][leaveIndex].status = 'Rejected';
    setApprovedMessage(`Rejected leave for User ID ${leaveData[department][leaveIndex].userId}`);
    setDisabledButtons((prevState) => ({
      ...prevState,
      [`${department}-${leaveIndex}`]: true,
    }));
  };

  return (
    <div className="leave-requests-container">
      {['wordpress', 'app', 'sales'].map((department) => (
        <div className="leave-card" key={department}>
          <h3>{department === 'wordpress' ? 'WordPress Developers' : department === 'app' ? 'App Developers' : 'Sales Executives'}</h3>
          <p>Number of Leaves: {leaveData[department].length}</p>
          <table className={`table-${department}`}>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Apply Days</th>
                <th>Reason</th>
                <th>Start-End Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveData[department].map((leave, index) => (
                <tr key={index}>
                  <td>{leave.userId}</td>
                  <td>{leave.applyDays}</td>
                  <td>{leave.description}</td>
                  <td>{leave.startDate} - {leave.endDate}</td>
                  <td>{leave.status}</td>
                  <td>
                    <button
                      className="btn-approve"
                      onClick={() => handleApprove(department, index)}
                      disabled={disabledButtons[`${department}-${index}`]}
                    >
                      Approve
                    </button>
                    <button
                      className="btn-reject"
                      onClick={() => handleReject(department, index)}
                      disabled={disabledButtons[`${department}-${index}`]}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {approvedMessage && <p className="approved-message">{approvedMessage}</p>}
        </div>
      ))}
    </div>
  );
};

export default Aleave;
