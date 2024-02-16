import { useSelector } from 'react-redux';
import { CreateUser } from '../features/user';
import { Button } from './';
import { ROUTES, BUTTON_TYPES } from '../constants/constants';

const { PRIMARY } = BUTTON_TYPES;

function Home() {
  const { username } = useSelector((state) => state.user);
  return (
    <div className="my-10 px-4 text-center text-sm sm:my-16 md:text-base">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500 ">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button to={ROUTES.MENU} type={PRIMARY}>
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
