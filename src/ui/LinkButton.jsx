import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const style = 'text-sm text-blue-500 hover:text-blue-600';

  if (to === '-1') {
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
