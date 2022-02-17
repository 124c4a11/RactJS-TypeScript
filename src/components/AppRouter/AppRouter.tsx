import { Navigate, Route, Routes } from 'react-router-dom';

import { About, Posts, SinglePost } from '../../pages';


export function AppRouter(): JSX.Element {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  );
}
