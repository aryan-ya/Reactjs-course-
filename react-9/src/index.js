


import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";


const appRouter = createBrowserRouter([
  {
   path: "/",
   element: <App />,
   errorElement: <Error />,
  },

  
  {
    path: "/about",
    element: <About />,

  },
  {
    path: "/contact",
    element: <Contact />,

  },
  {
    path: "/restaurant/:resid",
    element: <RestaurantMenu />,

  },

],
)



const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}  />);
