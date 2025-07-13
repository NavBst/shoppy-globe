import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";


const Cart = () => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);
  const items = useSelector((store) => store.cart.items);
  let sum = 0;
  for(let item of items){
    sum = sum + Number(item.quantity) * Number(item.price);
  }
  
  useEffect(()=>{ // handling total and subtotal cost
     setSubtotal((sum).toFixed(2));  
     let discount = subtotal - (subtotal*25/100);
     discount = discount.toFixed(2);
     setTotal(discount);
  },[total, items])

  const clearDispatch = useDispatch();

  const handleClearCart = () => {
    clearDispatch(clearCart())
  }

  return (
    <main>
      <div className="inner">
        <div id="cart-head">
          <h3 >Shopping Cart</h3>
          <button className="clear-cart-btn" onClick={() => handleClearCart()}>Clear Cart</button>
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
                  cartItems.map((product, index) => <CartItem key={index} cartItem={product} index={index} />)
                }
              </tbody>
            </table>
          </div>
          <div id="price">
            <h4>Summary</h4>
            <div>
              <span>Subtotal</span> <span>{subtotal}</span>
            </div>
            <div>
              <span>Shipping Cost</span> <span>$40</span>
            </div>
            <div>
              <span>Discount</span> <span>-25%</span>
            </div>
            <div>
              <span>Tax</span> <span>-</span>
            </div>
            <div>
              <p>Total</p> <p>{subtotal===0 ? 0 :total}</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Cart