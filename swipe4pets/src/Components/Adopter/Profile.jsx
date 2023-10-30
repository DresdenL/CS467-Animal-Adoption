import React from 'react';
import profile_pic from './temp/profile_pic.png';

function Profile() {
  // Implement the user portfolio component here
  return (
    <div className="Profile">
      <div>
        <h2>Adopter Profile</h2>
        <img style={{height: "300px"}} src={profile_pic} />
        <div><strong>Name: Jane Doe</strong></div>
        <div><strong>Email: janedoe@gmail.com</strong></div>
        <div><strong>Location: Los Angeles, CA</strong></div> 
      </div>
    </div>
  );
}

export default Profile; 