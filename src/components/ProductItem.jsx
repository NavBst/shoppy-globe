import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }
  return (
    <article>
      <figure>
        <img src={product.thumbnail} alt="" />
      </figure>
      <div className="card-info">
        <div>
          <div>
            <h6>{product.title}</h6>
          </div>
          <p>${product.price}</p>
        </div>
        <div>
          <Link to={`/product/${product.id}`}>
            <button>View Product</button>
          </Link>
          <span>{product.rating}⭐ </span>
          <button onClick={() => handleAddItem(product)}>Add to Cart</button>
        </div>
      </div>
    </article>
  )
}


export default ProductItem