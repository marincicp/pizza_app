import { Outlet, useNavigation } from 'react-router-dom';
import { CartOverview } from '../features/cart';
import { Header, Loader } from './';
import { STATUS } from '../constants/constants';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === STATUS.LOADING;

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
