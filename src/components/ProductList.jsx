import { useEffect, useState } from "react";

import ProductItem from "./ProductItem"
import useFetch from "../utils/useFetch";


const ProductList = () => {
  const {products, error} = useFetch('https://dummyjson.com/products');

  return (
    <section>
      <div className="inner">
        <div >
          <h3></h3>
          <div className="product-list-container">
            {
              products.map((product, index)=>
                 <ProductItem key={index} product={product}/>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}



export default ProductList