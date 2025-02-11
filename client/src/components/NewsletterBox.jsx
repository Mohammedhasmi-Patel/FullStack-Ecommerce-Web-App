// import React from "react";

// const NewsletterBox = () => {
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="text-center ">
//       <p className="text-2xl font-medium text-gray-800 ">
//         Subscribe now & get 20% off
//       </p>
//       <p className="text-gray-400 mt-3 ">
//         This is amazing newsboox for getting amazing content and latest trends.
//       </p>
//       <form
//         onSubmit={onSubmitHandler}
//         className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
//       >
//         <input
//           className="w-full sm:flex-1 outline-none"
//           type="email"
//           placeholder="Enter Your Email"
//           required
//         />
//         <button
//           className="bg-black text-white text-xl px-10 py-4 "
//           type="submit"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewsletterBox;

import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="text-center px-4">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        This is an amazing newsletter for getting exclusive content and the
        latest trends.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center gap-3 mx-auto my-6 border p-3 rounded-lg"
      >
        <input
          className="w-full sm:flex-1 outline-none px-3 py-2"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          className="bg-black text-white text-xl px-6 py-3 w-full sm:w-auto"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
