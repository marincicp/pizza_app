import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId);

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;

CartItem.propTypes = {
  item: PropTypes.obj,
};
