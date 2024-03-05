import React, { useState, useEffect } from "react";

const ProductCard = ({ products }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  return (
    <div className="card-wrapper grid grid-cols-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-4 pt-4 pb-4">
      {products.map((item) => (
        <div key={item?.code} className="card rounded-none md:rounded-2xl">
          <img
            src={item?.images[0]?.url}
            alt={item?.images[0]?.altText}
            className="product-image h-40 sm:h-80 md:h-[22rem] md:p-4 rounded-none md:rounded-lg"
          />
          <div className="product-details p-2 md:p-4">
            <h3 className="font-clashDisplay font-bold tracking-wide">
              {item?.fnlColorVariantData?.brandName}
            </h3>

            <p className="text-sm pt-3 pb-2 pl-0 pr-0 font-inter">
              {screenWidth >= 640
                ? item?.name?.slice(0, 32)
                : item?.name?.slice(0, 15)}
              ...
            </p>
            <div className="price-wrapper">
              <div className="price flex items-center justify-between flex-wrap">
                <h6 className="main-price font-inter font-semibold">
                  ₹{Number(item?.price?.value).toLocaleString("en-IN")}
                </h6>
                <span className="wasPriceData font-inter">
                  ₹{Number(item?.wasPriceData?.value).toLocaleString("en-IN")}
                </span>
                <span className="discountPercent font-inter">
                  {item?.discountPercent == undefined
                    ? ""
                    : `(${item?.discountPercent})`}
                </span>
                <button className="add-to-cart-btn w-full p-1 text-sm md:pt-2 md:pb-2 md:pl-3 md:pr-3 md:w-auto font-inter font-medium cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
