// components/Profile.js

import React from 'react';
import { MyProfile } from './MyProfile'; // Assuming your MyProfile component is in the same folder

const Profile = () => {
  return (
    <div className='max-h-screen'>
      <MyProfile />
    </div>
  );
};

export default Profile;
