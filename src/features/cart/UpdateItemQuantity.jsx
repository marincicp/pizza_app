import { useDispatch } from 'react-redux';
import { Button } from '../../ui';
import { deceaseItemQuantity, increaseItemQuantity } from './cartSlice';
import { BUTTON_TYPES } from '../../constants/constants';

const { ROUNDED } = BUTTON_TYPES;

function UpdateItemQuantity({ pizzaId, curQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        disabled={curQuantity === 1}
        type={ROUNDED}
        onClick={() => dispatch(deceaseItemQuantity(pizzaId))}
      >
        -
      </Button>

      <span className="text-sm font-medium">{curQuantity}</span>
      <Button
        type={ROUNDED}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
