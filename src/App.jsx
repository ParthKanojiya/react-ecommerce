import React from "react";
import "./index.css";
import Carousel from "./components/Carousel";
import Product from "./components/Product";

function App() {
  return (
    <main>
      <div className="w-full m-auto md:p-4 max-w-screen-2xl xl:max-w-[1400px]">
        <Carousel />
        <Product />
      </div>
    </main>
  );
}

export default App;
