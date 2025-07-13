import { MdCancel } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../utils/cartSlice";


const CartItem = ({ cartItem, index }) => {

  const quant = useSelector((store) => store.cart.items[index].quantity);

  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(removeItem(item))
  }

  const increment = (item) => {
    // setQuantity((c)=>c+1);
    dispatch(incrementQuantity(item))
  }

  const decrement = (item) => {
    // setQuantity((c)=>c-1);
    dispatch(decrementQuantity(item))
  }

  return (
    <tr>
      <td className="product">
        <figure>
          <img src={cartItem.thumbnail} alt="" width={100} height={100} />
        </figure>
        <div>
          <h6>{cartItem.title}</h6>
          <p>brand: {cartItem.brand}</p>
        </div>
      </td>
      <td className="total">${cartItem.price}</td>
      <td className="quantity">
        <div>
          <button onClick={() => decrement(cartItem) }>-</button>
          <p>{quant}</p>
          <button onClick={() => increment(cartItem)}>+</button>
        </div>


      </td>
      <td>
        {Number(cartItem.price * quant).toFixed(2)}
      </td>
      <td>
        <button onClick={() => handleDelete(cartItem)}>
          <MdCancel id="remove" />
        </button>
      </td>
    </tr>
  )
}

export default CartItem