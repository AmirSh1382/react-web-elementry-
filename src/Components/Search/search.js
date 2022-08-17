import React, { Component } from "react";

import styles from "./search.module.css";

class search extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>What Are you looking for?</div>
        <input placeholder="Search Sth..." />
      </div>
    );
  }
}

export default search;