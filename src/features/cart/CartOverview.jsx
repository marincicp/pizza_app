import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { ROUTES } from '../../constants/constants';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:p-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity} pizza(s)</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to={ROUTES.CART} className="flex items-center gap-2">
        <span>Open</span> <RiShoppingCart2Fill />
      </Link>
    </div>
  );
}

export default CartOverview;
