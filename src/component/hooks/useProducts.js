import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProsucts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProsucts(data.products))
    }, [])
    return [products, setProsucts];
}

export default useProducts;