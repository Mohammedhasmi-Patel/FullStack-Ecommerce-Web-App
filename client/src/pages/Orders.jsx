import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"My"} text2={"Orders"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Left: Product Info */}
            <div className="flex items-center gap-6 text-sm flex-1">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg font-medium">
                    {currency} {item.price}
                  </p>
                  <p>Quantity : 1</p>
                  <p>Size : M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">15-oct-2002</span>
                </p>
              </div>
            </div>

            {/* Middle: Ready to Ship */}
            <div className="flex items-center gap-2 w-1/4 justify-center">
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">Ready To Ship</p>
            </div>

            {/* Right: Track Order */}
            <div className="w-1/4 text-center">
              <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
