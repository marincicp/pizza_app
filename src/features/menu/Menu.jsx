import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import { MenuItem } from "./";
import { map } from "lodash-es";

function Menu() {
  const menu = useLoaderData();

  return (
    <ul>
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
