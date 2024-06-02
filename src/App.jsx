// import { useState } from "react";
// import Landing from "./assets/component/landing";
// import Item from "./assets/component/item";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './assets/component/landing';
import Item from './assets/component/item';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Landing />,
  },
  {
      path: "/item/:id",
      element: <Item />,
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
