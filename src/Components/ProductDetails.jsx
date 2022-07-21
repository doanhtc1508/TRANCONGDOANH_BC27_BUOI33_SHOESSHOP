import { Modal } from "antd";
import React, { Component } from "react";

class ProductDetails extends Component {
  render() {
    const { product, visible, onCancel } = this.props;
    console.log("product", product);
    if (!product) {
      return null;
    }
    return (
      <Modal
        title="Detail Product"
        visible={visible}
        onOk={() => null}
        onCancel={() => onCancel()}
      >
        <div className="row mt-5">
          <div className="col-12">
            <img
              src={product.image}
              alt={product.name}
              width="100%"
              height="350px"
            />
          </div>
          <div className="col-12">
            <h1>Thông số kĩ thuật</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên sản phẩm</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>giá bán</td>
                  <td>{product.price} $</td>
                </tr>
                <tr>
                  <td>mô tả </td>
                  <td>{product.description}</td>
                </tr>
                <tr>
                  <td>số lượng còn hàng</td>
                  <td>{product.quantity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProductDetails;
