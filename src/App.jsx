// import { useState } from "react";
// import Landing from "./assets/component/landing";
// import Item from "./assets/component/item";
import AddProduct from './assets/component/AddProduct';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './assets/component/landing';
import Item from './assets/component/item';
// import { Router } from "./Router"


const router = createBrowserRouter([
  {
      path: "/",
      element: <Landing />,
  },
  {
      path: "/item/:id",
      element: <Item />,
  },
  {
    path: "/addproduct",
    element:<AddProduct/>,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
