import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeCategoriesCard = ({category}) => {
    const {package_id, img, title} = category;
  return (
    <div className="card card-compact shadow-xl p-2">
      <figure>
        <img src={img} alt="Shoes" className="w-full h-[300px]"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/packages/${package_id}`} className="btn btn-primary">View Products <FaArrowRight className="ml-3"></FaArrowRight></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoriesCard;
