import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({ filteredProducts }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { cart, setCart } = CartState();

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const addToCart = (item) => {
    setCart((PrevCart) => [...PrevCart, item]);
  };

  return (
    <>
      <div className="card-wrapper grid grid-cols-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-4 pt-4 pb-4">
        {filteredProducts.map((item) => (
          <Link to={item?.fnlColorVariantData?.colorGroup}>
            <div
              // data-aos="fade-up"
              // data-aos="zoom-in"
              data-aos="zoom-in"
              // data-aos-anchor-placement="center-bottom"
              key={item?.code}
              className="card rounded-none md:rounded-2xl"
            >
              <img
                src={item?.images[0]?.url}
                alt={item?.images[0]?.altText}
                className="product-image h-40 sm:h-80 md:h-[22rem] md:mt-4 md:ml-4 md:mr-4 rounded-none md:rounded-lg"
              />
              <div className="product-details p-2 md:p-4">
                <Link to={item?.fnlColorVariantData?.colorGroup}>
                  <h3 className="font-[MonaSansExtraBold] font-extrabold">
                    {item?.fnlColorVariantData?.brandName}
                  </h3>
                </Link>

                <p className="text-sm pt-3 pb-2 pl-0 pr-0 font-[MonaSansMedium] font-medium">
                  {screenWidth >= 640
                    ? item?.name?.slice(0, 32)
                    : item?.name?.slice(0, 15)}
                  ...
                </p>
                <div className="price-wrapper">
                  <div className="price flex items-center justify-between flex-wrap">
                    <h6 className="main-price font-interTight font-bold">
                      ₹{Number(item?.price?.value).toLocaleString("en-IN")}
                    </h6>
                    <span className="wasPriceData font-interTight">
                      ₹
                      {Number(item?.wasPriceData?.value).toLocaleString(
                        "en-IN"
                      )}
                    </span>
                    <span className="discountPercent font-interTight">
                      {item?.discountPercent == undefined
                        ? ""
                        : `(${item?.discountPercent})`}
                    </span>
                    <button
                      className="add-to-cart-btn w-full p-1 text-sm md:pt-2 md:pb-2 md:pl-3 md:pr-3 md:w-auto font-[MonaSansMedium] font-bold cursor-pointer"
                      onClick={() => addToCart(item)}
                      // onClick={() => setCart([...cart, products])}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
