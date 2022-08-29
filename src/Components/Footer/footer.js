import React, { Component } from "react";

import styles from "./Footer.module.css";

class footer extends Component {
  render() {
    return (
      <footer className={styles.container}>
        <div className="text-center text-white">
          AmirSh &copy; All rights reserved
        </div>
      </footer>
    );
  }
}

export default footer;