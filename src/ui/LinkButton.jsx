import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/constants';

const { GO_BACK } = ROUTES;

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const style = 'text-sm text-blue-500 hover:text-blue-600';

  if (to === GO_BACK) {
    return (
      <Link className={style} onClick={() => navigate(-1)}>
        {children}
      </Link>
    );
  }

  return (
    <Link className={style} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
