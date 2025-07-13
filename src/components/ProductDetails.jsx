import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./loading/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p className="error-text">Error: {error.message}</p>;

  return (
    <section className="product-details">
      <div className="product-details-card">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-brand">Brand: {product.brand}</p>
          <p className="product-category">Category: {product.category}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
