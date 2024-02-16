// import { Link } from 'react-router-dom';
import { Button, LinkButton } from '../../ui';
import CartItem from './CartItem';
import { isEmpty, map } from 'lodash-es';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { EmptyCart } from './';

function Cart() {
  const { username } = useSelector((state) => state.user);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  if (isEmpty(cart)) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold">Your cart, {username}</h2>

      <ul className="divide-y divide-stone-200 border-b">
        {map(cart, (item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizza
        </Button>

        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
