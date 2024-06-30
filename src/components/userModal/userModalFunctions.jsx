import { useContext } from 'react';
import { UserContext } from '../../context/userContext'; 

export const useUserModalFunctions = () => {
  const { setUsername } = useContext(UserContext);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return {
    handleUsernameChange,
  };
};
