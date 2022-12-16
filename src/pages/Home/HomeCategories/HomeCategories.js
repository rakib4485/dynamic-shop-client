import React, { useEffect, useState } from 'react';
import HomeCategoriesCard from './HomeCategoriesCard';

const HomeCategories = () => {

    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        fetch('https://dynamic-shop-server.vercel.app/packages')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-center text-4xl font-semibold mt-24">All Categories</h1>
            <div className="divider bg-orange-500 h-1 rounded-md w-[500px] mx-auto"></div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto my-12'>
            {
                categories.map(category => <HomeCategoriesCard
                    key={category._id}
                    category={category}
                ></HomeCategoriesCard>)
            }
            </div>
        </div>
    );
};

export default HomeCategories;