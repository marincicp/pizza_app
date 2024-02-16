import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, map } from 'lodash-es';
import { Button, LinkButton } from '../../ui';
import { clearCart, getCart } from './cartSlice';
import { EmptyCart, CartItem } from './';
import { ROUTES, BUTTON_TYPES } from '../../constants/constants';

const { SECONDARY, PRIMARY } = BUTTON_TYPES;

function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  if (isEmpty(cart)) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to={ROUTES.MENU}>&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 border-b">
        {map(cart, (item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type={PRIMARY} to={ROUTES.NEW_ORDER}>
          Order pizza
        </Button>

        <Button type={SECONDARY} onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
