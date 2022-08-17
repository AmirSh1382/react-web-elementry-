import React, { Component } from "react";

import Card from "./card";

import cssGrid from "../../Images/card-img-1.png";
import vsCode from "../../Images/card-img-2.png";
import htmlCss from "../../Images/card-img-3.png";
import project from "../../Images/card-img-4.png";
import hacker from "../../Images/card-img-5.png";

class cards extends Component {
  render() {
    return (
      <div className="container-fluid bg-black py-5">
        <div className="row gy-4">
          <Card name="Css grid" price="500" src={cssGrid} />
          <Card name="Vs code" price="400" src={vsCode} />
          <Card name="Html Css" price="800" src={htmlCss} />
          <Card name="Project" price="900" src={project} />
          <Card name="Hacker" price="120" src={hacker} />
        </div>
      </div>
    );
  }
}

export default cards;