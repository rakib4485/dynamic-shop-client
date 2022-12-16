import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProductCard from '../SingleProductCard/SingleProductCard';

const Categories = () => {
    const category = useLoaderData();
    const {title, products} = category;
    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-24">{title}</h1>
            <div className="divider bg-orange-500 h-1 rounded-md w-[500px] mx-auto"></div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto my-12">
            {
                products.map(product => <SingleProductCard
                    key={product.id}
                    product= {product}
                ></SingleProductCard>)
            }
            </div>
        </div>
    );
};

export default Categories;