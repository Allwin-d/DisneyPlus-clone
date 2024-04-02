import React from "react";
import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nationalG from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import starwar from "../assets/Images/starwar.png";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
    },
    {
      id: 2,
      image: pixar,
    },
    {
      id: 3,
      image: marvel,
    },
    {
      id: 4,
      image: starwar,
    },
    {
      id: 5,
      image: nationalG,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16 ">
      {productionHouseList.map((item) => (
        <div
          key={item.id} // Unique key prop
          className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            "
        >
          <img src={item.image} className="w-full z-[1] opacity-100" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
