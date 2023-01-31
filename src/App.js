import logo from "./logo.svg";
import "./App.css";
// import BarChart from "./components/BarChart"
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container total flex">
        <div className="total__box--title text-stack">
          <h2>My balance</h2>
          <h1>$921.48</h1>
        </div>
        <img src="./images/logo.svg"></img>
      </div>
      <div className="container">
        <h1>Spending - Last 7 days</h1>

        {/* <BarChart /> */}
        <ul className="flex">
          <li>mon</li>
          <li>tue</li>
          <li>wed</li>
          <li>thu</li>
          <li>fri</li>
          <li>sat</li>
          <li>sun</li>
        </ul>

        <hr></hr>
        <div className="total flex">
          <div className="text-stack">
            <h3>Total this month</h3>
            <h1>$478.33</h1>
          </div>

          <div className="text-stack">
            <h4>+2.4%</h4>
            <h3>from last month</h3>
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
