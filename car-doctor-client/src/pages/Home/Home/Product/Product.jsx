import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const Product = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('product.json').then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    return (
        <div className="mt-6 mb-6">
            <div className="space-y-3 text-center">
                <h3 className="text-2xl font-bold text-[#FF3811]">Popular Products</h3>
                <h3 className="text-5xl font-bold">Browse Our Products</h3>
                <p className="text-[#737373]">
                    the majority have suffered alteration in some form, by injected humour, or <br /> randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)

                }
            </div>

        </div>
    );
};

export default Product;