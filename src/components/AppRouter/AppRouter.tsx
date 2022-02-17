import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';

import { privateRoutes, publicRoutes } from '../../router';


export function AppRouter(): JSX.Element {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) return <></>

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to="/posts" />} />

      </Routes>
      :
      <Routes>
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
  );
}
