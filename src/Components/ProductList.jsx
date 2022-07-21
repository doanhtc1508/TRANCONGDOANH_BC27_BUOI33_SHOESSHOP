import React, { Component } from "react";
import { Row, Col } from "antd";
import ProductItem from "./ProductItem";
import ProductDetails from "./ProductDetails";

class ProductList extends Component {
  state = {
    visible: false,
    productDetail: null,
  };
  handleItem = (product) => {
    const { onSelect } = this.props;
    onSelect(product);
    this.setState({
      visible: true,
      productDetail: product,
    });
  };
  render() {
    const { products } = this.props;

    return (
      <Row gutter={16}>
        {products.map((product) => (
          <Col style={{ marginBottom: 10 }} span={8} key={`key-${product.id}`}>
            <ProductItem product={product} handleSeletect={this.handleItem} />
          </Col>
        ))}
        {this.state.productDetail ? (
          <ProductDetails
            product={this.state.productDetail}
            visible={this.state.visible}
            onCancel={() => this.setState({ visible: false })}
          />
        ) : (
          <></>
        )}
      </Row>
    );
  }
}

export default ProductList;
