import { About, Login, Posts, SinglePost } from "../pages";


interface IRoute {
  path: string;
  Component: () => JSX.Element;
}


export const publicRoutes: IRoute[] = [
  { path: '/login', Component: Login },
];


export const privateRoutes: IRoute[] = [
  { path: '/posts', Component: Posts },
  { path: '/posts/:id', Component: SinglePost },
  { path: '/about', Component: About },
];
