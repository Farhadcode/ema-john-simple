import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProsucts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProsucts(data))
    }, [])
    return [products, setProsucts];
}

export default useProducts;