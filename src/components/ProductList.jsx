import { useEffect, useState } from "react";

import ProductItem from "./ProductItem"
import useFetch from "../utils/useFetch";


const ProductList = () => {
  const { products, error } = useFetch('https://dummyjson.com/products');

  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
  };

  //  If no query, show all products
  const resultsToShow = query
    ? products.filter((product) =>
      product.title.toLowerCase().includes(query)
    )
    : products;
  return (
    <section>
      <div className="inner">
        <div >
          <search>
            <input type="text" className="custom-input" onChange={(e) => handleSearch(e)} placeholder="Serach" />
          </search>
          <div className="product-list-container">
            {resultsToShow.length > 0 ? (
              resultsToShow.map((product, index) => (
                <ProductItem key={index} product={product} />
              ))
            ) : (
              <p>No products found for "{query}"</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}



export default ProductList