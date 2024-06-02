import { createBrowserRouter } from "react-router-dom";
import Landing  from "./assets/component/landing";
import Item  from "./assets/component/item";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/item/:id",
        element: <Item />,
    },
  ]);
