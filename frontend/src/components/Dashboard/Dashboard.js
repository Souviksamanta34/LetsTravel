import React from 'react';
import prinaSilImage from './prina_sil.jpeg';
import shabuImage from './shabu.jpeg';
import profilepicImage from './profilepic.jpg';
import "./DashboardStyles.css";

const Dashboard = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="members">
        <div className="member">
          <img src={prinaSilImage} alt="Member 1" />
          <h2>Prinan Sil</h2>
          <p>Structure Design And User Authentication</p>
        </div>
        <div className="member">
          <img src={shabuImage} alt="Member 2" />
          <h2>Swabarna Banerjee</h2>
          <p>Testing And System Analysis</p>
        </div>
        <div className="member">
          <img src={profilepicImage} alt="Member 3" />
          <h2>Souvik Samanta</h2>
          <p>Developed Front & Backend</p>
        </div>
      </div>
      <div className="work">
        <h2>Our Work</h2>
        <p>Our team developed a MERN travel website allowing users to browse and book tour packages. 
          It involved backend development using Node.js and Express.js, frontend development using React.js, and MongoDB as the database. 
          The website offered user authentication, tour package listings and bookings. 
          The project focused on ensuring data consistency and security by implementing proper data models and server-side validation. 
          The MERN travel website successfully integrated various technologies to provide a comprehensive platform for users to plan and book their desired tour packages.
          Furthermore, the website incorporated features such as personalized user profiles, allowing users to save their favorite tour packages. 
          The project emphasized scalability, enabling future expansion to include additional destinations and enhanced functionality based on user feedback.</p>
      </div>
    </div>
  );
};

export default Dashboard;

