import React from "react";
import Course from "./Course";

const Home = () => {
  return (
    <div className="home">
      <h4>My name is Home</h4>
      <div className="course">
        <Course>React</Course>
        <Course>React Native</Course>
        <Course>Laravel</Course>
        <Course>Bomberman</Course>
        <Course>Messi</Course>
        <Course>Superman</Course>
      </div>
    </div>
  );
};

export default Home;
