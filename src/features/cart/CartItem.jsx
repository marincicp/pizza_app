import PropTypes from 'prop-types';
import { formatCurrency } from '../../utils/helpers';
import { Button } from '../../ui';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="sm:items py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small"> Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.obj,
};
