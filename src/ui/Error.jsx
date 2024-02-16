import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';
import { ROUTES } from '../constants/constants';

function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={ROUTES.GO_BACK}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
