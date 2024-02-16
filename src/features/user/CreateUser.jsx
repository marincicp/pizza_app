import { useState } from 'react';
import { Button } from '../../ui';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router';
import { BUTTON_TYPES, ROUTES } from '../../constants/constants';

const { PRIMARY } = BUTTON_TYPES;
function CreateUser() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));

    navigate(ROUTES.MENU);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sml mb-4 text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type={PRIMARY}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
