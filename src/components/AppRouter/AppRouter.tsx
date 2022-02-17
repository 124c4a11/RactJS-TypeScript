import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '../../router';


export function AppRouter(): JSX.Element {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  );
}
