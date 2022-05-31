
  import React from 'react';
  import DayPlanner from '../../Assets/DayPlanner.png';
  import Getaway from '../../Assets/Getaway.png';
  import Weather from '../../Assets/Weather.png';
  // import DayPlanner from '../../Assets/DayPlanner.png';
  export default function Portfolio() {
  return (
  <>
    <h1>Portfolio Page</h1>
    <br></br>

    <div className="d-flex justify-content-evenly row ">
      <div className="card mp-5 col-lg-6 col-md-10 col-sm-11" style={{width: '18rem'}}>
        <img src={DayPlanner} className="card-img-top" alt="Day Planner" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="https://github.com/Jaspertena/Work-Day-Scheduler" className="btn btn-primary">Day Planner Github Link</a>
        </div>
      </div>
      <div className="card mp-5 col-lg-6 col-md-10 col-sm-11" style={{width: '18rem'}}>
        <img src={Weather} className="card-img-top" alt="Weather" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <a href="https://github.com/Jaspertena/Weather" className="btn btn-primary">Weather Github Link</a>
        </div>
      </div>

      <div className="card col-lg-6 col-md-10 col-sm-11" style={{width: '18rem'}}>
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