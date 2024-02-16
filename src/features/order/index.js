import Order, { loader } from './Order';
import OrderItem from './OrderItem';
import CreateOrder, { action } from './CreateOrder';
import SearchOrder from './SearchOrder';
import UpdateOrder from './UpdateOrder';
import { action as updateLoader } from './UpdateOrder';

export {
  Order,
  SearchOrder,
  OrderItem,
  CreateOrder,
  loader as orderLoader,
  action as createOrderAction,
  UpdateOrder,
  updateLoader,
};
