import React, { Component } from "react";
import { DataContext } from "../shop/Context";
import { Link } from "react-router-dom";
import styles from "../cart/Cart.css";

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getTotal();
  }

  render() {
    const { cart, increase, reduction, removeProduct, total } = this.context;
    if (cart.length === 0) {
      return <h2 className="nothing" style={{ textAlign: "center" }}>Nothings Product</h2>;
    } else {
      return (
        <>
        <div className="container">
        <div className="cart_wrapper">
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className={styles.amount}>
                  <button className={styles.count} onClick={() => reduction(item._id)}>
                    {" "}
                    -{" "}
                  </button>
                  <span>{item.count}</span>
                  <button className={styles.count} onClick={() => increase(item._id)}>
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}
          <div className="total">
            <Link to="/payment">Payment</Link>
            <h3>Total: ${total}</h3>
          </div>
        </div>
        
        </div>
    
        </>
      );
    }
  }
}

export default Cart;
