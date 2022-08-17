import React, { Component } from "react";

import styles from "./search.module.css";

class search extends Component {
  constructor () {
    super()
    this.state = {
      text: ""
    }
  }

  changeHandler = event => {
    this.setState({
      text : event.target.value
    })
  }

  render() {
    const { text } = this.state
    return (
      <div className={styles.container}>
        <div>What Are you looking for?</div>
        <div>
          <input placeholder="Search Sth..." onChange={this.changeHandler} value={text}/>
          <div className={styles.inputValue}>{text}</div>
        </div>
      </div>
    );
  }
}

export default search;