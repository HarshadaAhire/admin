import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Aproject.css';

const projectsData = [
  // Your projects data array remains unchanged
  {
    title: 'Web Design',
    category: 'Landing page Design',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 60,
    status: 'In Progress',
    progressColor: 'blue'
  },
  {
    title: 'Web Design',
    category: 'New Admin Design',
    description: 'Description of project 3. Curabitur ac scelerisque justo, non condimentum tortor. Fusce suscipit orci id tincidunt sollicitudin. Nunc varius dolor ac nisl lacinia efficitur. Nulla in nisi faucibus, molestie eros ut, congue lectus.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 70,
    status: 'Pending',
    progressColor: 'yellow'
  },
  {
    title: 'Android',
    category: 'App Design and Develop',
    description: 'Description of project 2. Phasellus magna enim, ultricies eu metus id, rhoncus maximus risus. Sed aliquet mauris sit amet odio molestie, vitae tincidunt turpis condimentum. Sed a sem urna. In vel turpis non libero sollicitudin congue.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 75,
    status: 'Completed',
    progressColor: 'green'
  },
  {
    title: 'Web Design',
    category: 'Landing page Design',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 60,
    status: 'In Progress',
    progressColor: 'blue'
  },
  {
    title: 'Android',
    category: 'App Design and Develop',
    description: 'Description of project 2. Phasellus magna enim, ultricies eu metus id, rhoncus maximus risus. Sed aliquet mauris sit amet odio molestie, vitae tincidunt turpis condimentum. Sed a sem urna. In vel turpis non libero sollicitudin congue.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 75,
    status: 'Completed',
    progressColor: 'green'
  },
  {
    title: 'Web Design',
    category: 'New Admin Design',
    description: 'Description of project 3. Curabitur ac scelerisque justo, non condimentum tortor. Fusce suscipit orci id tincidunt sollicitudin. Nunc varius dolor ac nisl lacinia efficitur. Nulla in nisi faucibus, molestie eros ut, congue lectus.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 70,
    status: 'Pending',
    progressColor: 'yellow'
  },
  {
    title: 'Web Design',
    category: 'New Admin Design',
    description: 'Description of project 3. Curabitur ac scelerisque justo, non condimentum tortor. Fusce suscipit orci id tincidunt sollicitudin. Nunc varius dolor ac nisl lacinia efficitur. Nulla in nisi faucibus, molestie eros ut, congue lectus.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 70,
    status: 'Pending',
    progressColor: 'yellow'
  },
  {
    title: 'Android',
    category: 'App Design and Develop',
    description: 'Description of project 2. Phasellus magna enim, ultricies eu metus id, rhoncus maximus risus. Sed aliquet mauris sit amet odio molestie, vitae tincidunt turpis condimentum. Sed a sem urna. In vel turpis non libero sollicitudin congue.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 75,
    status: 'Completed',
    progressColor: 'green'
  },
  {
    title: 'Web Design',
    category: 'Landing page Design',
    description: 'Description of project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    dueDate: '23 Dec',
    team: [
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      'https://img.freepik.com/free-photo/portrait-young-woman-standing-outside_23-2148882870.jpg',
      'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'
    ],
    progress: 60,
    status: 'In Progress',
    progressColor: 'blue'
  },
  // Add more project objects as needed

];

const Aproject = () => {
  const [filter, setFilter] = useState('All Projects');
  const [projects, setProjects] = useState(projectsData);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'All Projects') {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(project => project.status === selectedFilter);
      setProjects(filteredProjects);
    }
  };

  const toggleDescription = (index) => {
    const updatedProjects = [...projects];
    updatedProjects[index].showFullDescription = !updatedProjects[index].showFullDescription;
    setProjects(updatedProjects);
  };

  const handleNewProject = () => {
    // Logic to add a new project
    console.log('Add new project');
    // Example to navigate to a new route using Link instead of useHistory
    // Adjust the 'to' attribute to your desired route
    // Example: <Link to="/create-project">Create Project</Link>
  };

  return (
    <div className="wrapper">
      <div className="filters">
        <select value={filter} onChange={handleFilterChange}>
          <option value="All Projects">All Projects</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
        {/* Replace button with Link */}
        <Link to="/Createproject" className="new-project-btn">Create Project</Link>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>
              {project.title}
              <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>{project.status}</span>
            </h3>
            <p className="meta">{project.category}</p>
            <p className="description">
              {project.showFullDescription ? project.description : `${project.description.slice(0, 100)}...`}
              {!project.showFullDescription && (
                <span className="show-more" onClick={() => toggleDescription(index)}>See more</span>
              )}
            </p>
            <div className="team">
              {project.team.map((member, idx) => (
                <img src={member} alt={`Team member ${idx + 1}`} key={idx} />
              ))}
            </div>
            <div className="progress">
              <span className="progress-text">
                {project.progress}%
              </span>
              <div className={`progress-bar ${project.progressColor}`} style={{ width: `${project.progress}%` }}></div>
              <i className="fa fa-calendar" title={`Due date: ${project.dueDate}`}></i> {project.dueDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aproject;
