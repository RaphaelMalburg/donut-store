import MyOrderHeader from "@/components/MyOrderHeader";
import React from "react";

const Payment = () => {
  return (
    <section className="h-fit min-h-full  max-h-screen  w-screen   flex-col relative overflow-auto scrollbar-thin scrollbar-thumb-rose-300 text-pink-50 bg-pink-50  ">
      <MyOrderHeader />
      <h1 className="w-10/12 mx-auto text-center text-pink-900 my-2 text-2xl font-bold tracking-wide ">Payment</h1>

      <form action="" className="w-10/12 mx-auto bg-gradient-to-r from-rose-900 to-pink-950 p-4 rounded-md [&_label]:font-semibold ">
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Your name" className="bg-gray-100 border-2 w-full p-4 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Your email" className="bg-gray-100 border-2 w-full p-4 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone">Phone</label>
          <input type="phone" name="phone" id="phone" placeholder="Your phone" className="bg-gray-100 border-2 w-full p-4 rounded-lg" />
        </div>
      </form>
    </section>
  );
};

export default Payment;
