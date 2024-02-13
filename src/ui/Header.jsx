import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/";

function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza </Link>

      <SearchOrder />
      <p>User</p>
    </header>
  );
}

export default Header;
