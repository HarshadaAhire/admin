import React, { useState } from 'react';
import { BsCheckCircle, BsClock, BsTrash, BsXCircle, BsCheck, BsX, BsTrashFill } from 'react-icons/bs';
import './Aticket.css';

const Aticket = () => {
  const [tickets, setTickets] = useState([
    { id: 1245, requestedBy: 'John Doe', requestedByImg: 'https://randomuser.me/api/portraits/men/1.jpg', priority: 'High', subject: 'Issue with the application performance under heavy load', status: 'Open', createdDate: '2024-06-20', dueDate: '2024-06-30' },
    { id: 1246, requestedBy: 'Jane Smith', requestedByImg: 'https://randomuser.me/api/portraits/women/2.jpg', priority: 'Medium', subject: 'Minor UI issue on the settings page', status: 'Open', createdDate: '2024-06-21', dueDate: '2024-07-01' },
    { id: 1247, requestedBy: 'Alice Johnson', requestedByImg: 'https://randomuser.me/api/portraits/women/3.jpg', priority: 'Low', subject: 'Suggestions for new features', status: 'Closed', createdDate: '2024-06-22', dueDate: '2024-07-02' },
    { id: 1248, requestedBy: 'Bob Brown', requestedByImg: 'https://randomuser.me/api/portraits/men/4.jpg', priority: 'High', subject: 'Critical bug in the payment gateway integration', status: 'Deleted', createdDate: '2024-06-23', dueDate: '2024-07-03' },
  ]);

  const [filter, setFilter] = useState('All');

  const handleApprove = (id) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, status: 'Closed' };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  const handleDelete = (id) => {
    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === id) {
        return { ...ticket, status: 'Deleted' };
      }
      return ticket;
    });
    setTickets(updatedTickets);
  };

  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'Open') return ticket.status === 'Open';
    if (filter === 'Closed') return ticket.status === 'Closed';
    if (filter === 'Deleted') return ticket.status === 'Deleted';
    return true;
  });

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="ticket-screen">
      <div className="tickets-heading">Tickets</div>
      <div className="ticket-cards-container">
        <div className="ticket-card total-tickets">
          <div className="icon-container">
            <BsCheckCircle className="icon" />
          </div>
          <div className="card-content">
            <h3>Total Tickets</h3>
            <p>100</p>
          </div>
        </div>
        <div className="ticket-card pending-tickets">
          <div className="icon-container">
            <BsClock className="icon" />
          </div>
          <div className="card-content">
            <h3>Pending Tickets</h3>
            <p>50</p>
          </div>
        </div>
        <div className="ticket-card deleted-tickets">
          <div className="icon-container">
            <BsTrash className="icon" />
          </div>
          <div className="card-content">
            <h3>Deleted Tickets</h3>
            <p>10</p>
          </div>
        </div>
        <div className="ticket-card closed-tickets">
          <div className="icon-container">
            <BsXCircle className="icon" />
          </div>
          <div className="card-content">
            <h3>Closed Tickets</h3>
            <p>{tickets.filter(ticket => ticket.status === 'Closed').length}</p>
          </div>
        </div>
      </div>

      <div className="ticket-table-container">
        <div className="tab-buttons">
          <button className={`tab-button ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All Tickets</button>
          <button className={`tab-button ${filter === 'Open' ? 'active' : ''}`} onClick={() => setFilter('Open')}>Open Tickets</button>
          <button className={`tab-button ${filter === 'Closed' ? 'active' : ''}`} onClick={() => setFilter('Closed')}>Closed Tickets</button>
          <button className={`tab-button ${filter === 'Deleted' ? 'active' : ''}`} onClick={() => setFilter('Deleted')}>Deleted Tickets</button>
        </div>
        <table className="ticket-table">
          <thead>
            <tr>
              <th>ID No</th>
              <th>Requested By</th>
              <th>Priority</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>#{ticket.id}</td>
                <td className="requested-by">
                  <img src={ticket.requestedByImg} alt={ticket.requestedBy} />
                  {ticket.requestedBy}
                </td>
                <td>
                  <span className={`priority-label priority-${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status-label status-${ticket.status.toLowerCase()}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{formatDate(ticket.createdDate)}</td>
                <td>{formatDate(ticket.dueDate)}</td>
                <td className="action-buttons">
                  {ticket.status === 'Open' && (
                    <>
                      <button className="action-btn approve-btn" onClick={() => handleApprove(ticket.id)}><BsCheck /> Approve</button>
                      <button className="action-btn reject-btn" onClick={() => handleDelete(ticket.id)}><BsX /> Delete</button>
                    </>
                  )}
                  {ticket.status === 'Closed' && (
                    <button className="action-btn closed-btn" onClick={() => handleDelete(ticket.id)}><BsTrashFill /> Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Aticket;
