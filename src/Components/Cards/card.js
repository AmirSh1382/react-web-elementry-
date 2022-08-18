import React, { Component } from "react";

import styles from "./card.module.css";

class card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  down1 = () => {
    if (this.state.counter >= 1) {
      this.setState(prevState => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  up1 = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { name, price, src } = this.props;
    const { counter } = this.state;
    return (
      <div className="col-12 col-md-6 col-lg-4 col-xl-3">
        <div className={styles.card}>
          <img src={src} alt="card" />
          <div>
            <h4 className="m-3">{name}</h4>
            <span className="m-3 mb-0 p-2">{price} {counter ? `* ${counter} = ${counter * price}$` : null} </span>
            <hr className="text-white m-0 mt-3" />
            <div className={styles.counter}>
              <i onClick={this.down1} className={`bi bi-arrow-down ${!counter && styles.deactive}`}></i>
              <div>{counter}</div>
              <i onClick={this.up1} className="bi bi-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default card;