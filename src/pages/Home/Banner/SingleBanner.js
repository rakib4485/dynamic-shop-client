import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

const SingleBanner = ({banner}) => {

    const {id, prev, next, img, description} = banner;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <img src={img} className="w-full" alt=''/>
        <div className="absolute flex transform -translate-y-1/2 right-8 lg:right-52 top-[85%] lg:top-[80%]">
          <a href={`#slide${prev}`} className="btn btn-circle text-3xl">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle ml-2 lg:ml-5 text-3xl">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 top-[50%]">
        <div className='w-[70%] mx-auto text-center'>
            <p className='text-white text-3xl lg:text-8xl '>{description}</p>
            <Link className="btn btn-active btn-secondary mt-5">Explore Now <FaArrowRight className='ml-3'></FaArrowRight></Link>
          </div>
        </div>
      </div>
    );
};

export default SingleBanner;