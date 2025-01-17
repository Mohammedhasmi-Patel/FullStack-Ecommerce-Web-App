import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSaleProducts, setBestSaleProducts] = useState([]);

  useEffect(() => {
    setBestSaleProducts(products.filter((item) => item.bestseller === true));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl ">
        <Title text1="Best" text2="Sellers" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          This is Awesome Best selling Products available in our website. which
          is purchase by millions of people.
        </p>
      </div>
      {/* Here we will rander latest product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
        {bestSaleProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
