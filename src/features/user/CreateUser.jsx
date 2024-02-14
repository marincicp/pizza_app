import { useState } from 'react';
import { Button } from '../../ui';

function CreateUser() {
  const [username, setUsername] = useState('Petar');

  function handleSubmit(e) {
    e.preventDefault();
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
          <Button type="primary" to="/menu">
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;