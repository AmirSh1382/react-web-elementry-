import React, { Component } from "react";

import styles from "./header.module.css";

import logo from "../../Images/logo.png";
import Hamburger from "./Hamburger";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <a href="/"><img src={logo} alt="logo"></img></a>
        <Hamburger />
      </header>
    );
  }
}

export default Header;