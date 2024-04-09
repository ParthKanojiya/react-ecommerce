import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const URL = import.meta.env.VITE_API;

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data?.products);
      setFilteredProducts(data?.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartState = () => {
  return useContext(CartContext);
};

export { Context, CartContext };
