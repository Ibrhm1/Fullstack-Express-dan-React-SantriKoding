import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';
export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get('token'));

  useEffect(() => {
    const handleTokenChange = () => {
      setIsAuth(!!Cookies.get('token'));
    };
    window.addEventListener('storage', handleTokenChange);
    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  });

  return (
    <AuthProvider.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
