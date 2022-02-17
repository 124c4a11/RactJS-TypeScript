import { About, Posts, SinglePost } from "../pages";


interface IRoute {
  path: string;
  Component: () => JSX.Element;
}


export const routes: IRoute[] = [
  { path: '/posts', Component: Posts },
  { path: '/posts/:id', Component: SinglePost },
  { path: '/about', Component: About },
];
