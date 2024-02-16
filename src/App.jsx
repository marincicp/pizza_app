import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './ui';
import { routes } from './routes';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: routes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
