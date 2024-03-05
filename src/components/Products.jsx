import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <section className="min-h-dvh pt-12">
      <h1 className="text-3xl font-clashDisplay font-extrabold pl-4 pr-4 md:pl-0 md:pr-0 pt-4 pb-4 tracking-wider">
        Men's Shoes
      </h1>
      <Product />
    </section>
  );
};
export default Products;
