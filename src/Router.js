import { createBrowserRouter } from "react-router-dom";
import Landing  from "./assets/component/landing";
import Item  from "./assets/component/item";
import AddProduct from "./assets/component/AddProduct";

export const router = createBrowserRouter([
    {
        path: "/",
        element: < Landing />,
    },
    {
        path: "/item/:id",
        element: <Item />,
    },
    {
        path:"/addproduct",
        element:<AddProduct/>,
    },
  ]);
