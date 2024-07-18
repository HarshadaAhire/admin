import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [department, setDepartment] = useState('');
  const [designation, setDesignation] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleSave = () => {
    // Logic to save the employee details
    console.log('Employee details saved');
  };

  const handleCancel = () => {
    // Logic to cancel the employee addition
    console.log('Employee addition canceled');
  };

  return (
    <div className="employee-form">
      <h2>Personal Details</h2>
      <div className="left-section">
        <div className="form-group">
          <label>First Name *</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
        </div>
        <div className="form-group">
          <label>Phone Number *</label>
          <input type="text" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} placeholder="Enter Phone Number" />
        </div>
        <div className="form-group">
          <label>Current Address *</label>
          <input type="text" value={currentAddress} onChange={(e) => setCurrentAddress(e.target.value)} placeholder="Enter Current Address" />
        </div>
        <div className="form-group">
          <label>Gender *</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Birth *</label>
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Nationality *</label>
          <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} placeholder="Enter Nationality" />
        </div>
        <div className="form-group">
          <label>Emergency Contact No *</label>
          <input type="text" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} placeholder="Enter Emergency Contact No" />
        </div>
        <div className="form-group">
          <label>Relationship *</label>
          <input type="text" value={relationship} onChange={(e) => setRelationship(e.target.value)} placeholder="Enter Relationship" />
        </div>
      </div>
      <div className="right-section">
        <div className="form-group">
          <label>Last Name *</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
        </div>
        <div className="form-group">
          <label>Permanent Address *</label>
          <input type="text" value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} placeholder="Enter Permanent Address" />
        </div>
        <div className="form-group">
          <label>Marital Status *</label>
          <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
            <option value="">Select</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date of Joining *</label>
          <input type="date" value={dateOfJoining} onChange={(e) => setDateOfJoining(e.target.value)} />
        </div>
        <h2>Company</h2>
        <div className="form-group">
          <label>Department *</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select</option>
            <option value="hr">HR</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="sales">Sales</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label>Designation *</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} placeholder="Enter Designation" />
        </div>
        
        <div className="form-actions">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
