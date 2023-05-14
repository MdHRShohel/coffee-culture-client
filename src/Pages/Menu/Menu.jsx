import React, { useEffect, useState } from "react";
import MenuCard from "../Home/Popular Menu/MenuCard";
import { Link } from "react-router-dom";

const Menu = () => {
  const [Menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("https://coffee-culture-server.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => setMenu(data));
    //console.log('data asche');
  }, []);
  return (
    <div className="my-5 lg:px-40">
      <div className="text-center mb-5">
        <h3 className="text-[#FF3811] mb-5 font-bold text-3xl">Menu Items</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mr-20">
        {Menu.map((menu) => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
    </div>
  );
};

export default Menu;
