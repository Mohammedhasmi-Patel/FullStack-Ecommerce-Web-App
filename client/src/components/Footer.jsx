import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            This is an amazing opportunity to work with us because i am sure we
            are one of the gteatest in the world.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delievery</li>
            <li>Privay Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 ">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-097-615-4241</li>
            <li>hasmi@123yopmail.com</li>
          </ul>
        </div>

        <div>
          <hr />
          <p className="py-5 text-sm text-center ">
            Copyright © 2025 hasmi.com All Rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
