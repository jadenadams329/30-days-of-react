//index.js
// importing the react and react-dom package
import React from "react";
import ReactDOM from "react-dom";
import techImage from "./images/frontend_technologies.png";
import profilePhoto from "./images/feature-react.webp";
import check from "./images/circle-check-solid.svg";
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

const person = {
  firstName: "Jaden",
  lastName: "Adams",
  devLevel: "Noob Developer",
  country: "USA",
  skills: [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Angular",
    "Node",
    "Git",
    "ASP",
    "API",
    "C#",
    "SQE",
  ],
  photo: (
    <div>
      <img src={profilePhoto} />
    </div>
  ),
};

const checkMark = <img className="check" src={check} />;

const skillsFormated = person.skills.map((skill) => <li>{skill}</li>);

const date = new Date(2022, 6, 10);

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
      <div>
        <h2>Exersice Level 4</h2>
      </div>
      <div className="background">
        <div className="levelFourWrapper">
          <div className="profilePhoto">{person.photo}</div>
          <div className="person">
            <h3>
              {person.firstName} {person.lastName}
            </h3>
            {checkMark}
          </div>
          <div>
            <p>
              {person.devLevel}, {person.country}
            </p>
          </div>
          <div>
            <h3>Skills</h3>
          </div>
          <div className="pill">{skillsFormated}</div>
          <div className="joinedWrapper">
            <p>
              <i class="fa fa-clock-o"></i> Joined on June 10, 2022
            </p>
          </div>
        </div>
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
