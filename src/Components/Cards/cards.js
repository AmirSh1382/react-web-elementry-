import React, { Component } from "react";

import Card from "./card";

import cssGrid from "../../Images/card-img-1.png";
import vsCode from "../../Images/card-img-2.png";
import htmlCss from "../../Images/card-img-3.png";
import project from "../../Images/card-img-4.png";
import hacker from "../../Images/card-img-5.png";

class cards extends Component {
  constructor () {
    super()
    this.state = {
      products: [
        {id: 1 ,name:"Css grid", price:"500", src:cssGrid},
        {id: 2 ,name:"Vs code", price:"400", src:vsCode},
        {id: 3 ,name:"Html Css", price:"800", src:htmlCss},
        {id: 4 ,name:"Project", price:"900", src:project},
        {id: 5 ,name:"Hacker", price:"120", src:hacker},
      ]
    }
  }

  render() {
    const { products } = this.state
    return (
      <div className="w-100 bg-black">
        <div className="container py-5">
          <div className="row gy-4">
            {products.map(product => <Card key={product.id} name={product.name} price={product.price} src={product.src} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default cards;