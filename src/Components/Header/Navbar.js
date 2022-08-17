import React, { Component } from "react";

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  transition: transform 0.3s;

  a {
    text-decoration: none;
    color: #fff;
    transition: 0.2s;

    &:hover {
      color: #fe1a5c;
    }
  }

  @media (max-width: 768px) {
    transform: ${props => props.open ? "translateX(0)" : "translateX(100%)"};
    background-color: #fff;
    padding: 70px 0px;
    display: block;
    height: 100vh;
    width: 220px;
    position: fixed;
    right: 0;
    top: 0;

    li {
      padding: 10px 25px;
    }

    a {
      color: #000;
    }
  }
`;

class Navbar extends Component {
  render() {
    const { open } = this.props;
    return (
      <Ul open={open}>
        <li className="pe-3"><a href="/">About US</a></li>
        <li className="pe-3"><a href="/">Contact</a></li>
        <li className="pe-3"><a href="/">Products</a></li>
        <li className="pe-3"><a href="/">Home</a></li>
      </Ul>
    );
  }
}

export default Navbar;