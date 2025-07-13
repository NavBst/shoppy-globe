import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        try {
            const res = await axios.get(url);
            const data = res.data.products;
            console.log(data)
            setProducts(data);
        } catch (e) {
            setError(error)
        }
    }
    useEffect(() => {
        getProducts();
    }, [])
    return {products, error};
}

export default useFetch