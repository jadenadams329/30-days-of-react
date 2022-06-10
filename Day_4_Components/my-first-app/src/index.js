//index.js
// importing the react and react-dom package
import React from "react";
import { createRoot } from "react-dom/client";
import techImage from "./images/frontend_technologies.png";
import profilePhoto from "./images/feature-react.webp";
import check from "./images/circle-check-solid.svg";
// JSX element, header
const header = (
  <header>
    <h1>Day 4</h1>
  </header>
);

//Header Component
const Header = () => {
  return header;
};

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

const skillsFormated = person.skills.map((skill) => (
  <li key={skill}>{skill}</li>
));

const date = new Date(2022, 6, 10);

//Level 2 component
const TechStackPhoto = () => (
  <div>
    <h2>Exercise: Level 2</h2>
    {techStack}
  </div>
);

//Level 3 exercise component
const LevelThree = () => (
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
);

let colorArray = [];

const colorGenorator = () => {
  for (let i = 0; i < 6; i++) {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    console.log("#" + color);
    let colors = "#" + color;
    colorArray.push(colors);
  }
  console.log(colorArray);
};

colorGenorator();

const colorLoop = colorArray.map((color) => (
  <li style={{ background: color }} key={color}>
    {color}
  </li>
));

//level 4 color component
const ColorComponent = () => <ul className="colorBoxes">{colorLoop}</ul>;

//Level 4 component
const LevelFour = () => (
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
          <i className="fa fa-clock-o"></i> Joined on June 10, 2022
        </p>
      </div>
    </div>
  </div>
);
// JSX element, main
const main = (
  <main>
    <div>
      <TechStackPhoto />
      <div>
        <h2>Exercise: Level 3</h2>
      </div>
      <LevelThree />
      <div>
        <h2>Exersice Level 4</h2>
      </div>
      <ColorComponent />
      <LevelFour />
    </div>
  </main>
);

//Main component
const Main = () => {
  return main;
};

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2022</p>
  </footer>
);

const Footer = () => {
  return footer;
};

//App component
const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
