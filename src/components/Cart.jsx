
import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";


const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const clearDispatch = useDispatch();

  const handleClearCart = () => {
    clearDispatch(clearCart())
  }



  console.log(cartItems)
  return (
    <main>
      <div className="inner">
        <div id="cart-head">
          <h3 >Shopping Cart</h3>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
        </div>

        <div id="cart">

          <div id="cart-list">
            <table cellSpacing={'0'} >
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((product, index) => <CartItem key={index} cartItem={product}  />)
                }
              </tbody>
            </table>
          </div>
          <div id="price">
            <h4>Summary</h4>
            <div>
              <span>Subtotal</span> <span>subtotal</span>
            </div>
            <div>
              <span>Shipping Cost</span> <span>$3434</span>
            </div>
            <div>
              <span>Discount</span> <span>-$3434</span>
            </div>
            <div>
              <span>Tax</span> <span>$3434</span>
            </div>
            <div>
              <p>Total</p> <p>$89834</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart