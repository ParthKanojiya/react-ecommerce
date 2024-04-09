import React from "react";
import { Link } from "react-router-dom";
import Empty_Cart from "../assets//Empty-Cart.jpg";

const boxShadow = {
  Shadow: {
    border: "1px solid #282825",
    boxShadow: "3px 3px 0 0 #282825",
  },
  ShadowNone: {
    border: "none",
    boxShadow: "none",
  },
};

const EmptyCart = () => {
  return (
    <section className="empty-cart-wrapper w-full min-h-[50dvh] flex items-center justify-center pb-4">
      <div className="empty-cart flex items-center justify-center flex-col p-4 text-center">
        <img
          src={Empty_Cart}
          alt="empty cart"
          className="w-4/6 md:w-1/4 aspect-square object-cover mix-blend-multiply"
        />
        <h2 className="font-unbounded font-black text-3xl p-2">
          Your Cart is Empty
        </h2>
        <p className="font-GeneralSans font-medium text-lg">
          There is nothing in your bag. Let's add some items.
        </p>
        <button
          className="mt-4 px-4 py-2 rounded-full font-inter font-black"
          style={boxShadow.Shadow}
        >
          <Link to="/">Go Home</Link>
        </button>
      </div>
    </section>
  );
};

export default EmptyCart;
