import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '../../ui';
import { deleteItem } from './cartSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BUTTON_TYPES } from '../../constants/constants';

const { SMALL } = BUTTON_TYPES;

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type={SMALL}>
      <RiDeleteBin6Line className="text-base" />
    </Button>
  );
}

export default DeleteItem;

DeleteItem.propTypes = {
  pizzaId: PropTypes.number,
};
