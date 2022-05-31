
   
import React from 'react';
import Profile from '../../Assets/Profilepic.jpeg';

export default function About() {
  return (
    <div>
      <h1 className="display-4 mb-4">About Page</h1>
      <div className="row d-flex justify-content-evenly">
        <img src={Profile} className="img-fluid col-lg-5" alt="Profile Picture"/>
        <p className="Font col-lg-4" >
      As a recent Georgia Tech Bootcamp full stack web developer graduate, I am 
      looking to  leverage an accounting and finance background to build a more 
      intuitive user experience on the web. I aim to use my newly developed 
      skills in JavaScript, CSS, React.js, SQL, Node.js,  MongoDB and responsive
      web design along with seasoned interpersonal, problem solving and critical 
      thinking skills to add value in a team environment.  I have worked on  
      teams to build full stack websites from creations  of concepts to 
      fully deployed sites. 
      </p> 
      </div>
     

    </div>
  );
}