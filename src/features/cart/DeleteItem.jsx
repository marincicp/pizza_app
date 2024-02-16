import { useDispatch } from 'react-redux';
import { Button } from '../../ui';
import { deleteItem } from './cartSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      <RiDeleteBin6Line className="text-base" />
    </Button>
  );
}

export default DeleteItem;
