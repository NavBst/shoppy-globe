import { useState } from "react";
import { MdCancel } from "react-icons/md"
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

const CartItem = ({ cartItem }) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeItem(id))
    toast.info("Deleted!",{
      position: 'top-center',
      autoClose: 1000,
      pauseOnHover: false
    })
  }

  const handleQuantity = (e)=>{
    let value = e.target.value;
    if (value >= 1 && value <= cartItem.stock)
    setQuantity(e.target.value);
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
        <input type="number" value={quantity} max={10} onChange={(e) => handleQuantity(e)} min={'1'} />
      </td>
      <td>{Number(cartItem.price * quantity).toFixed(2)}</td>
      <td>
        <button  onClick={()=>handleDelete(cartItem.id)}>
          <MdCancel id="remove"  />
        </button>
      </td>
    </tr>
  )
}

export default CartItem