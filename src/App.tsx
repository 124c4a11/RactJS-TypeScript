import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';

import styles from './App.module.scss';
import { AppRouter, Navbar } from './components';


function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }

    setIsLoading(false);
  }, []);

  return (
    <div className={styles['App']}>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading
      }}>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div >
  );
}

export default App;
