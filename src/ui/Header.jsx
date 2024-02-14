import { Link } from "react-router-dom";
import { SearchOrder } from "../features/order/";
import { Username } from "../features/user";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b-2 border-stone-300 flex justify-between items-center">
      <Link to="/" className="uppercase tracking-widest sm:px-6">
        Fast Pizza
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
