
  import React from 'react';
  import DayPlanner from '../../Assets/DayPlanner.png';
  import Getaway from '../../Assets/Getaway.png';
  // import Weather from '../../Assets/Weather.png';
  // import DayPlanner from '../../Assets/DayPlanner.png';
  export default function Portfolio() {
  return (
  <>
    <h1>Portfolio Page</h1>
    <br></br>

    <div classname="d-flex justify-content-evenly row ">
      <div className="card mp-5 col-lg-8 col-md-10 col-sm-112" style={{width: '50rem'}}>
        <img src={DayPlanner} className="card-img-top" alt="Day Planner" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="https://github.com/Jaspertena/Work-Day-Scheduler" className="btn btn-primary">Day Planner Github Link</a>
        </div>
      </div>

      <div className="card col-lg-8 col-md-10 col-sm-112" style={{width: '50rem'}}>
        <img src={Getaway} className="card-img-top" alt="Getaway" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="https://github.com/Jaspertena/Getaway" className="btn btn-primary">Getaway Github Link</a>
        </div>
      </div>
    </div>
  </>
  );
  }