import React, { Component } from "react";

import styles from "./banner.module.css";

import Banner from "../../Images/banner.jpg";

class banner extends Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={Banner} alt="banner"></img>
        <div className={styles.textInfo}>
          <h3>Welcome</h3>
          <p>We're learning <span>React.JS</span></p>
        </div>
      </div>
    );
  }
}

export default banner;