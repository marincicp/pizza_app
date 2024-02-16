import { formatCurrency } from '../../utils/helpers';

// function OrderItem({ item, isLoadingIngredients, ingredients }) {
function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;
  console.log(item, 'zzu');
  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
