import React from 'react';
import sjsResume from '../../Assets/Resume.png';


export default function Resume() {
  return (
    <div>
      <h1 className="display-4 mb-4">Resume</h1>
      <img src={sjsResume} className="img-fluid col-lg-5" alt="Seamona Resume"/>
    </div>
  );
}
