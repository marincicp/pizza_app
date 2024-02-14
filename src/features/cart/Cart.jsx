import { Link } from 'react-router-dom';
import { Button, LinkButton } from '../../ui';
import CartItem from './CartItem';
import { map } from 'lodash-es';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="text-xl font-semibold">Your cart, %NAME%</h2>

      <ul className="divide-y divide-stone-200 border-b">
        {map(cart, (item) => (
          <li>
            <CartItem item={item} key={item.pizzaId} />
          </li>
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizza
        </Button>

        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;