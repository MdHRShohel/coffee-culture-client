import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const MenuCard = ({ menu }) => {
  const { id, name, image, price, description } = menu;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleOrder =()=>{
    if(user){
      Swal.fire({
        position: "middle",
        icon: "success",
        title: "Order Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    else{
      navigate('/login');
    }
  }
  return (
    <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-orange-100 shadow-md">
      <img
        class="h-60 w-full rounded-t-lg object-cover"
        src={image}
        alt="product image"
      />
      <div class="mt-4 px-5 pb-5">
        <div className="md:h-32">
          <h5 class="text-xl font-semibold tracking-tight text-slate-900">
            {name}
          </h5>
          <h5 class="py-4 tracking-tight text-slate-900">{description}</h5>
        </div>

        <div class="flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">${price}</span>
          </p>
          <button
            onClick={handleOrder}
            class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
