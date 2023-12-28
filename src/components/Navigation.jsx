import React from 'react'


const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../images/photo-1.jpg" alt="do some coding" height={100} />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation