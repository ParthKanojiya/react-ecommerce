import React from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../context/Context";
import Shimmer from "./Shimmer";

const ProductPage = () => {
  const { id } = useParams();
  const { products, filteredProducts, setFilteredProducts } = CartState();

  const filters = filteredProducts.filter(
    (product) => product?.fnlColorVariantData?.colorGroup === id
  );
  console.log(filters);

  return (
    <div className="ProductPage p-4">
      <>
        {filters.map((filtItems) => (
          <div className="ProductPageCard flex gap-8" key={filtItems.code}>
            {/*
             ** Left Image
             */}
            <div className="left-img-wrapper flex">
              <div className="left-img flex flex-col gap-2 p-4 h-[80vh] overflow-y-scroll">
                {filtItems.extraImages.map((extraImage) => (
                  <img
                    key={extraImage.model}
                    src={extraImage.images[0].url}
                    alt={filtItems.name}
                    className="aspect-square object-cover w-28 rounded-md"
                  />
                ))}
              </div>
              <div className="main-img">
                <img
                  src={filtItems?.images[0]?.url}
                  alt={filtItems?.images[0]?.altText}
                  className="h-40 sm:h-80 md:h-[80vh] md:mt-4 md:ml-4 md:mr-4 rounded-none md:rounded-lg"
                />
              </div>
            </div>

            {/*
             ** Right Side Details
             */}
            <div className="right-side p-4">
              <h3 className="font-[MonaSansExtraBold] font-extrabold">
                {filtItems?.fnlColorVariantData?.brandName}
              </h3>
              {/* <p className="text-sm pt-3 pb-2 pl-0 pr-0 font-[MonaSansMedium] font-medium">
              {screenWidth >= 640
                ? item?.name?.slice(0, 32)
                : item?.name?.slice(0, 15)}
              ...
            </p> */}
              <p className="text-sm pt-3 pb-2 pl-0 pr-0 font-[MonaSansMedium] font-medium">
                {filtItems?.name?.slice(0, 32)}
                ...
              </p>
              <div className="price-wrapper">
                <div className="price flex items-center justify-between flex-wrap">
                  <h6 className="main-price font-interTight font-bold">
                    ₹{Number(filtItems?.price?.value).toLocaleString("en-IN")}
                  </h6>
                  <span className="wasPriceData font-interTight">
                    ₹
                    {Number(filtItems?.wasPriceData?.value).toLocaleString(
                      "en-IN"
                    )}
                  </span>
                  <span className="discountPercent font-interTight">
                    {filtItems?.discountPercent == undefined
                      ? ""
                      : `(${filtItems?.discountPercent})`}
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
        ))}
      </>
    </div>
  );
};

export default ProductPage;
