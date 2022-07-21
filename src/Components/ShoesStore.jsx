import React, { Component } from "react";
import data from "../utils/data.json";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
    };
  }
  handleSelect = (product) => {
    // console.log(product);
    this.setState({ selectedProduct: product });
  };

  render() {
    return (
      <div className="container ">
        <h1 className="text-center text-warrning"> Shoes Shop</h1>
        <ProductList products={data} onSelect={this.handleSelect} />
        <ProductDetails product={this.state.selectedProduct} />
      </div>
    );
  }
}
