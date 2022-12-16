import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProductCard = ({product}) => {

    const {img, price, name} = product;

    return (
        <div className="card card-compact shadow-xl p-2">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-[300px]"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p><strong>Price: </strong>{price}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary">View Products <FaArrowRight className="ml-3"></FaArrowRight></Link>
        </div>
      </div>
    </div>
    );
};

export default SingleProductCard;