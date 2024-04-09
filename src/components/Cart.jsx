import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { cart, setCart } = CartState();
  const [subtotal, setSubtotal] = useState(0); // Declare subtotal state variable
  const shippingEstimate = 50; // Set shipping estimate to 50 rupees
  const taxRate = 0.12; // Default tax rate (12%)

  useEffect(() => {
    // Calculate subtotal
    let subtotal = cart.reduce(
      (acc, curr) => acc + parseFloat(curr.price?.value),
      0
    );
    setSubtotal(subtotal);

    // Calculate tax estimate
    const taxEstimate = subtotal * taxRate;

    // Calculate total
    const orderTotal = subtotal + shippingEstimate + taxEstimate;

    setTotal(orderTotal);
  }, [cart]);

  return (
    <>
      <h1 className="text-4xl font-black pt-12 pl-4 pr-4 pb-4 md-pl-0 md:pr-0">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <form className="md:grid md:grid-cols-12 md:gap-8 p-4">
          <section aria-labelledby="cart-heading" className="grid col-span-8">
            <ul role="list">
              {/**
               * Mapping List of Li
               */}
              {cart.map((item) => (
                <li
                  className="py-4 md:py-10 px-4 flex rounded-md bg-white mb-3 box-shadow"
                  key={item?.code}
                >
                  <div className="up">
                    <img
                      src={item?.images[0]?.url}
                      alt="Front of men's Basic Tee in sienna."
                      className="w-24 h-24 md:w-40 md:h-40 object-cover"
                    />
                  </div>
                  <div className="ml-6 flex flex-col flex-1 justify-between gap-4">
                    <div className="md:grid md:grid-cols-2 md:gap-6 w-full relative">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-sm md:text-lg w-5/6 break-words">
                            <a href="#" className="awd axs bkz">
                              {item?.name}
                            </a>
                          </h3>
                        </div>
                        <div className="flex gap-10 py-1 text-slate-400">
                          <p className="axq">
                            {item?.fnlColorVariantData?.brandName}
                          </p>
                          <p className="jx afi afu atm axq">
                            {item?.segmentNameText}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold">
                            ₹
                            {Number(item?.price?.value).toLocaleString("en-IN")}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500 text-base font-medium">
                              {item?.discountPercent}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="lh bws cgv">
                        <label htmlFor="quantity-0" className="hidden">
                          Quantity, Basic Tee
                        </label>

                        {/* <select
                        id="quantity-0"
                        name="quantity-0"
                        value={item.quantity}
                        className="py-[0.375rem] pr-8 pl-1 border rounded-md"
                      >
                        {items.map((prod) => (
                          <option>{parseInt(prod.quantity)}</option>
                        ))}
                      </select> */}

                        <div className="flex items-center gap-2 pt-3 md:pt-0">
                          <button className="text-2xl font-medium">
                            &#8722;
                          </button>
                          <input
                            type="text"
                            defaultValue={1}
                            className="py-0.5 px-4 text-lg font-medium border rounded-md min-w-14 max-w-14 w-1/5 text-center"
                          />
                          <button className="text-2xl font-medium">
                            &#43;
                          </button>
                        </div>

                        <div className="absolute top-0 right-0">
                          <button type="button" className="fs ly aqp axo bkw">
                            <div className="close-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                id="Isolation_Mode"
                                data-name="Isolation Mode"
                                viewBox="0 0 24 24"
                                strokeWidth="1.2"
                                stroke="#000000"
                                className="w-4 h-4"
                              >
                                <polygon points="24.061 2.061 21.939 -0.061 12 9.879 2.061 -0.061 -0.061 2.061 9.879 12 -0.061 21.939 2.061 24.061 12 14.121 21.939 24.061 24.061 21.939 14.121 12 24.061 2.061" />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="flex items-center gap-2">
                    <span className="text-green-500 font-medium">
                      {item?.discountPercent}
                    </span>
                  </div> */}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/**
           * Total Section Start.
           **/}

          <section
            aria-labelledby="summary-heading"
            className="col-span-4 bg-white p-4 md:p-8 rounded-md h-fit box-shadow mt-4 md:mt-0"
          >
            <h2 id="summary-heading" className="font-semibold text-xl">
              Order summary
            </h2>
            <dl className="mt-5">
              <div className="flex items-center justify-between pt-4 pb-4 border-t text-slate-700  text-sm font-medium">
                <dt className="avz axr">Subtotal</dt>
                <dd className="avz awd axu">₹{subtotal}</dd>
              </div>

              <div className="flex items-center justify-between pt-4 pb-4 border-t text-slate-700 ">
                <dt className="flex items-center justify-between gap-2 text-sm font-medium">
                  <span>Shipping estimate</span>
                  <a href="#" className="jt up axo bkw">
                    {/* <span className="t">
                    Learn more about how shipping is calculated
                  </span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 opacity-35"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </dt>
                <dd className="avz awd axu">₹{shippingEstimate}</dd>
              </div>

              <div className="flex items-center justify-between pt-4 pb-4 border-t text-slate-700 ">
                <dt className="flex items-center justify-between gap-2 text-sm font-medium">
                  <span>Tax estimate</span>
                  <a href="#" className="">
                    {/* <span className="t">
                    Learn more about how tax is calculated
                  </span> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5 opacity-35"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </dt>
                {/* <dd className="">₹8.32</dd> */}
                <dd className="">₹{(subtotal * taxRate).toFixed(2)}</dd>
              </div>

              <div className="flex items-center justify-between text-lg pt-4 pb-4 border-t ">
                <dt className="font-semibold">Order total</dt>
                <dd className="font-semibold">₹{total}</dd>
              </div>
            </dl>

            <div className="pt-4">
              <button className="w-full text-white font-semibold rounded px-4 py-3 bg-blue-600 box-shadow">
                Checkout
              </button>
            </div>
          </section>
        </form>
      )}
    </>
  );
};

export default Cart;
