import React from "react";
import Banner1 from '../../../assets/images/banner/1.jpg';
import Banner2 from '../../../assets/images/banner/2.jpg';
import Banner3 from '../../../assets/images/banner/3.jpg';
import offer from '../../../assets/images/banner/offer.png'
import SingleBanner from "./SingleBanner";

const Banner = () => {

    const bannerItems = [
        {
            id:1,
            prev: 3,
            next: 2,
            img: Banner1,
            description: "Discover Women's Fashion Trend"
        },
        {
            id:2,
            prev: 1,
            next: 3,
            img: Banner2,
            description: "Discover Women's Fashion Trend"
        },
        {
            id:3,
            prev: 2,
            next: 1,
            img: Banner3,
            description: "Discover Women's Fashion Trend"
        },
    ]

  return (
    <div>
      <div className="carousel w-full my-12">
      
      {
        bannerItems.map(banner => <SingleBanner
            key={banner.id}
            banner={banner}
        ></SingleBanner>)
      }
    </div>

      <div className="w-full mb-12">
        <img src={offer} alt="" className="w-full"/>
      </div>
    </div>
  );
};

export default Banner;
