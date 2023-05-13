import React from 'react';
import coffee from "../../../assets/coffee.svg";
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={coffee} className="md:max-w-sm rounded-lg shadow-2xl" />
        <div className="lg:mr-96">
          <h1 className="lg:text-5xl text-4xl font-bold">
            Enjoy your <span className="text-orange-600">coffee</span> before
            your activity
          </h1>
          <p className="py-6 lg:mt-4 lg:mr-36">
            Boost your productivity and build your mood with a glass of coffee
            in the morning
          </p>
          <Link to={"/menu"}>
            <button className="btn btn-outline">See Menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;