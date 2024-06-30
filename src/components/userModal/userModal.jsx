import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

function UserModal() {
  const { setUsername } = useContext(UserContext);

  const handleSetLaurynOwens = () => {
    setUsername('Lauryn Owens');
  };

  const handleSetGuest = () => {
    setUsername('Guest');
  };

  return (
    <div>
      <button onClick={handleSetLaurynOwens}>Lauryn Owens</button>
      <button onClick={handleSetGuest}>Comment as Guest</button>
    </div>
  );
}

export default UserModal;
