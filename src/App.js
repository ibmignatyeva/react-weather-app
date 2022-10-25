import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Brasília" />
        <footer>
          <a
            href="https://github.com/ibmignatyeva/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          <span> Open-Source Code by </span>{" "}
          <em className="Coder"> Ive Ignatyeva. </em>
          <a href="https://react-weatherapp-ive.netlify.app/"target="_blank" rel="noreferrer"> Hosted on Netlify.</a>
        </footer>
      </div>
    </div>
  );
}
