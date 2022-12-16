import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import HomeCategories from '../HomeCategories/HomeCategories';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <FeaturedProducts></FeaturedProducts>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;