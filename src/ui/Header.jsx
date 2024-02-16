import { Link } from 'react-router-dom';
import { SearchOrder } from '../features/order/';
import { Username } from '../features/user';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-300 bg-yellow-500 px-4 py-1 uppercase">
      <Link to="/" className="font-bold uppercase tracking-widest sm:px-6">
        🍕 Fast Pizza
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
