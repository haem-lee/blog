/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style/App.css';

import profileImage from './assets/img/haemin-profile-1.jpeg';

function App() {
  return (
    <div className="App">
      <div>
        <img src={profileImage} alt="profile" width={300} height={300} />
      </div>
      <div>To be continued...</div>
    </div>
  );
}

export default App;
