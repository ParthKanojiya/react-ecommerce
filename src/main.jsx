import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Cart from "./components/Cart.jsx";
import { Context } from "./context/Context.jsx";

const AppLayout = () => {
  return (
    <main>
      <div className="w-full m-auto max-w-screen-2xl xl:max-w-[1400px]">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/:id",
        element: <ProductPage />,
      },
      // {
      //   path: "/products/:productId",
      //   element: <Product />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Context>
//       <RouterProvider router={router} />
//     </Context>
//   </React.StrictMode>
// );
