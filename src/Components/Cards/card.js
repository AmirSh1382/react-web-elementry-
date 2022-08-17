import React, { Component } from "react";

import styles from "./card.module.css";

class card extends Component {
  render() {
    const { name, price, src } = this.props;
    return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className={styles.card}>
          <img src={src} alt="card" />
          <div>
            <h4 className="m-3">{name}</h4>
            <span className="m-3 m-2 p-2">{price}$</span>
          </div>
        </div>
      </div>
    );
  }
}

export default card;