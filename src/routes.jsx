import { Home, Error } from './ui';
import {
  CreateOrder,
  Order,
  createOrderAction,
  orderLoader,
  updateLoader,
} from './features/order';
import { Cart } from './features/cart';
import { Menu, menuLoader } from './features/menu';
import { ROUTES } from './constants/constants';

export const routes = [
  { path: ROUTES.HOME, element: <Home /> },
  {
    path: ROUTES.MENU,
    element: <Menu />,
    loader: menuLoader,
    errorElement: <Error />,
  },

  {
    path: ROUTES.CART,
    element: <Cart />,
  },
  {
    path: ROUTES.NEW_ORDER,
    element: <CreateOrder />,
    action: createOrderAction,
  },
  {
    path: ROUTES.GET_ORDER,
    element: <Order />,
    loader: orderLoader,
    errorElement: <Error />,
    action: updateLoader,
  },
];
