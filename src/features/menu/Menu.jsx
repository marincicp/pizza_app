import { useLoaderData } from 'react-router-dom';
import { map } from 'lodash-es';
import { getMenu } from '../../services/apiRestaurant';
import { MenuItem } from './';

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {map(menu, (item) => (
        <MenuItem pizza={item} key={item.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
