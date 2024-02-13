import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout, Home, Error } from "./ui";
import { Menu, menuLoader } from "./features/menu";
import { Cart } from "./features/cart";
import {
  CreateOrder,
  Order,
  createOrderAction,
  orderLoader,
} from "./features/order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
