import React from "react";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import Location from "./Location";

function Content() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
      <Project />
      <About />
      <Contact />
      <Location />
    </div>
  );
}

export default Content;
