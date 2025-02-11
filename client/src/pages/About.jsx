// import React from "react";
// import Title from "../components/Title";
// import NewsletterBox from "../components/NewsletterBox";
// import { assets } from "../assets/assets";

// const About = () => {
//   return (
//     <div>
//       <div className="text-2xl text-center pt-8 border-t">
//         <Title text1={"ABOUT"} text2={"US"} />
//       </div>
//       <div className="my-10 flex flex-col md:flex-row gap-16">
//         <img
//           className="w-full md:max-w-[450px] "
//           src={assets.about_img}
//           alt=""
//         />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
//           <p>
//             Welcome to Forver, your go-to e-commerce platform for quality
//             products at great prices. We offer a seamless shopping experience
//             with secure payments and fast delivery.
//           </p>
//           <p>
//             At Forver, customer satisfaction is our priority, ensuring
//             top-quality products and excellent support. Shop with confidence and
//             enjoy a hassle-free online shopping experience.
//           </p>
//           <b className="text-gray-800 ">Our Mission </b>
//           <p>
//             We are committed to customer satisfaction by offering excellent
//             service, fast delivery, and a user-friendly platform. Our goal is to
//             redefine e-commerce with trust, innovation, and affordability.
//           </p>
//         </div>
//       </div>
//       <div className="text-xl py-4">
//         <Title text1={"WHY"} text2={"CHOOSE US"} />
//       </div>
//       <div className="flex flex-col md:flex-row text-sm mb-20">
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Quality Assurance</b>
//           <p className="text-gray-800">
//             We prioritize customer satisfaction by offering reliable products,
//             secure packaging, and hassle-free returns. Our goal is to provide a
//             trustworthy shopping experience with guaranteed quality in every
//             purchase.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Convience</b>
//           <p className="text-gray-800">
//             We offer multiple payment options, reliable customer support, and a
//             seamless checkout process. With Forver, shopping is quick,
//             convenient, and stress-free.
//           </p>
//         </div>
//         <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
//           <b>Exceptional Customer Service: </b>
//           <p className="text-gray-800">
//             At Forver, we are dedicated to providing outstanding customer
//             support with quick responses and effective solutions. Your
//             satisfaction is our top priority, and we strive to make every
//             interaction smooth and helpful.
//           </p>
//         </div>
//       </div>
//       <NewsletterBox />
//     </div>
//   );
// };

// export default About;

import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Forver, your go-to e-commerce platform for quality
            products at great prices. We offer a seamless shopping experience
            with secure payments and fast delivery.
          </p>
          <p>
            At Forver, customer satisfaction is our priority, ensuring
            top-quality products and excellent support. Shop with confidence and
            enjoy a hassle-free online shopping experience.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            We are committed to customer satisfaction by offering excellent
            service, fast delivery, and a user-friendly platform. Our goal is to
            redefine e-commerce with trust, innovation, and affordability.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      {/* Fixed Mobile Layout */}
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-5 md:gap-0">
        <div className="border px-8 md:px-16 py-8 sm:py-16 flex flex-col gap-5 w-full">
          <b>Quality Assurance</b>
          <p className="text-gray-800">
            We prioritize customer satisfaction by offering reliable products,
            secure packaging, and hassle-free returns. Our goal is to provide a
            trustworthy shopping experience with guaranteed quality in every
            purchase.
          </p>
        </div>
        <div className="border px-8 md:px-16 py-8 sm:py-16 flex flex-col gap-5 w-full">
          <b>Convenience</b>
          <p className="text-gray-800">
            We offer multiple payment options, reliable customer support, and a
            seamless checkout process. With Forver, shopping is quick,
            convenient, and stress-free.
          </p>
        </div>
        <div className="border px-8 md:px-16 py-8 sm:py-16 flex flex-col gap-5 w-full">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-800">
            At Forver, we are dedicated to providing outstanding customer
            support with quick responses and effective solutions. Your
            satisfaction is our top priority, and we strive to make every
            interaction smooth and helpful.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
