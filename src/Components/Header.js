// import React from 'react'
// import klu from './KLU.png';

// const Header = () => {
//     return (
//         <div className='header-container'>
//             <div className='one'>
//                 <img src={klu} alt="KL University Logo" height={100} width={200} />
//             </div>
//             <div className="title" style={{ color: "red", flex: 1, display: 'flex', justifyContent: 'center', paddingRight: '100px' }}>
//                 <h1>KL UNIVERSITY</h1>
//             </div>
//         </div>
//     );
// }

// export default Header;



import React from 'react';
import './Header.css';
import logo1 from './logo.jpg'; // First logo
import profileImage from './Profile.jpeg'; // Profile image placeholder

function Header() {
  return (
    <div>
      {/* First Header */}
      <header className="header">
        <div className="logo-section">
          <img src={logo1} alt="KL University Logo" className="logo" />
        </div>
        <h1 className="title">
          Student Portal <span className="erp">- ERP</span>
        </h1>
        <div className="profile-section">
          <span className="student-id">2300032939</span>
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
      </header>

      {/* Second Header */}
      <header className="logout-header">
        <div className="logout-container">
          <button className="logout-button">Logout</button>
        </div>
      </header>
    </div>
  );
}

export default Header;