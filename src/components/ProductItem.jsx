import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";

const ProductItem = ({product}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
  return (
    <article>
      <figure>
        <img src={product.thumbnail} alt="" />
      </figure>
      <div>
          <h4>{product.title}</h4>
          <p >{product.description}</p>
          <div className="card-info">
            <span>${product.price}</span>
            <span>{product.rating}⭐ </span>
            <button onClick={()=>handleAddItem(product)}>Add to Cart</button>
          </div>
      </div>
    </article>
  )
}


export default ProductItem