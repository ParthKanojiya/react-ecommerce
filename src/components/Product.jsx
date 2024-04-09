import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./ProductCard";
import { CartState } from "../context/Context";

const Product = () => {
  const { products, filteredProducts, setFilteredProducts } = CartState();
  // const [products, setProducts] = useState([]);

  // const URL = import.meta.env.VITE_API;

  // const getData = async () => {
  //   try {
  //     const response = await fetch(URL);
  //     const data = await response.json();
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      {products?.length === 0 ? (
        <Shimmer />
      ) : (
        <section className="products-wrapper w-full m-auto max-w-screen-2xl xl:max-w-[1400px] sm:p-4 md:p-0">
          {/* <section className="products-wrapper pt-4 pb-4 sm:pl-4 sm:pr-4"> */}
          <h2 className="font-[MonaSansBlack] text-center text-4xl sm:text-6xl md:text-[7.9rem] uppercase font-black pt-12 pb-4">
            Latest Collection
          </h2>
          <div>
            <ProductCard filteredProducts={filteredProducts} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Product;
