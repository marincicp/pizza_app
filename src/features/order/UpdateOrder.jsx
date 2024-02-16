import { useFetcher } from 'react-router-dom';
import { Button } from '../../ui';
import { updateOrder } from '../../services/apiRestaurant';
import { BUTTON_TYPES } from '../../constants/constants';

const { PRIMARY } = BUTTON_TYPES;
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={PRIMARY}>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}
