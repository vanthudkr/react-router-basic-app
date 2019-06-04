import React from "react";

const Course = props => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h2 className="card-title">{props.children}</h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#a" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Course;
