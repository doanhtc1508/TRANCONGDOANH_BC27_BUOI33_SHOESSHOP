import React, { Component } from "react";
import { Image, Card, Button } from "antd";

class ProductItem extends Component {
  render() {
    const { product, handleSeletect } = this.props;
    return (
      <Card>
        <div style={{ padding: 20 }}>
          <Image src={product.image} preview={false} />
          <div className="card-text">
            <h4>{product.name}</h4>
            <b>Price: {product.price}</b>
            <div style={{ marginTop: 10 }}>
              <Button
                onClick={() => handleSeletect(product)}
                style={{ width: "40%" }}
                type="primary"
              >
                Detail
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProductItem;
