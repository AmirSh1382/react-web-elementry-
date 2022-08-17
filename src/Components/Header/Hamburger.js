import React, { Component } from "react";

import Navbar from "./Navbar";

import styled from "styled-components";

const Burger = styled.div`
  cursor: pointer;
  height: 1.5rem;
  width: 1.6rem;
  z-index: 50;
  position: fixed;
  right: 20px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  div {
    background-color: ${props => props.open ? "#fe1a5c" : "#fff"};
    transform-origin: 1px;
    border-radius: 10px;
    margin-top: auto;
    height: 3px;
    width: 100%;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"};
    }
    &:nth-child(2) {
      transform: ${props => props.open ? "translateX(-100%)" : "translateX(0px)"};
      opacity: ${props => props.open ? "0" : "1"};
    }
    &:nth-child(3) {
      transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state
    return (
      <div className="d-flex align-items-center">
        <Navbar open={ open } />
        
        <Burger open={ open } onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Burger>
      </div>
    );
  }
}

export default Hamburger;