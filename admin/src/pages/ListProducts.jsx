import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendURI } from "../App";

const ListProducts = ({ token }) => {
  const [productList, setProductList] = useState([]);

  const fetchProductList = async () => {
    try {
      const res = await axios.get(`${backendURI}/api/product/list`);
      console.log(res);
      if (res?.data?.success) {
        setProductList(res?.data?.products);
      } else {
        toast.error(res?.data?.message || "Something Wrong..");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong...");
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await axios.post(
        `${backendURI}/api/product/remove`,
        { id },
        {
          headers: {
            token,
          },
        }
      );
      console.log(res);
      if (res?.data?.success) {
        toast.success("Product Deleted Successfully....");
      } else {
        toast.error(res?.data?.message || "Something Wrong..");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "something went wrong...");
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}

        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>
        {/* Product List */}

        {productList.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm "
          >
            <img className="w-12" src={`${item.image[0]}`} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <p
              onClick={() => removeProduct(item._id)}
              className="text-right md:text-center cursor-pointer"
            >
              X
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProducts;
