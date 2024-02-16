import { Link } from 'react-router-dom';
import { LinkButton } from '../../ui';
import { ROUTES } from '../../constants/constants';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to={ROUTES.MENU}>&larr; Back to menu</LinkButton>

      <p className="mt-7  font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
