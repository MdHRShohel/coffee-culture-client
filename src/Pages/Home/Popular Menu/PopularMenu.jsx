import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
    //console.log('data asche');
  }, []);
  return (
    <div className="my-5 lg:px-40">
      <div className="text-center mb-5">
        <h3 className="text-[#FF3811] mb-5 font-bold text-3xl">Popular Menu</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-20">
        {Menu.slice(0, 3).map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/menu">
          <button className="btn btn-xs btn-wide sm:btn-sm md:btn-md lg:btn-lg">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
