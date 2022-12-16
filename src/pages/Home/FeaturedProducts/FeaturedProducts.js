import React from 'react';
import women from '../../../assets/images/banner/6.png'
import background from '../../../assets/images/banner/background.jpg'

const FeaturedProducts = () => {
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 py-12'
            style={{background: `url(${background})`}}
        >
            <div className='lg:w-2/3 mx-auto my-auto'>
                <h3 className='text-3xl text-amber-500'>Featured Products</h3>
                <h1 className='text-5xl lg:w-[80%] my-2 font-semibold text-fuchsia-500'>Ulima trendy dresses for women</h1>
                <p className='text-stone-600'>Ut enim ad minim veniam, quis nostrud exercitation ris uip ex ea commodo consequa uis aute irure dolor </p>
            </div>
            <div>
                <img src={women} alt="" />
            </div>
        </div>
    );
};

export default FeaturedProducts;