//index.js
// importing the react and react-dom package
import React from "react";
import ReactDOM from "react-dom";
import techImage from "./images/frontend_technologies.png";

// JSX element, header
const header = (
  <header>
    <h1>Day 3</h1>
  </header>
);

//Exercise level 2 img to render
const techStack = (
  <div>
    <img src={techImage} />
  </div>
);

// JSX element, main
const main = (
  <main>
    <div>
      <div>
        <h2>Exercise: Level 2</h2>
        {techStack}
      </div>
      <div>
        <h2>Exercise: Level 3</h2>
      </div>
      <div className="levelThreeWrapper">
        <div className="levelThreeHeaderWrapper">
          <h1 className="headerOne">Subscribe</h1>
          <p>Sign up with your email address to recieve news and updates</p>
        </div>
        <form>
          <div className="inputBoxWrapper">
            <input
              className="inputBox"
              type="text"
              id="fname"
              name="fname"
              placeholder="First name"
            />
            <input
              className="inputBox"
              type="text"
              id="lname"
              name="lname"
              placeholder="Last name"
            />
            <input
              className="inputBox"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input className="button" type="submit" value="Subscribe" />
          </div>
        </form>
      </div>
    </div>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2022</p>
  </footer>
);

// JSX element, app, a container or a parent
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");
// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two argument
ReactDOM.render(app, rootElement);
// or
//  ReactDOM.render([header, main, footer], rootElement)
