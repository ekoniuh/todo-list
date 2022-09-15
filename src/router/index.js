import About from '../pages/About';
import Posts from '../pages/Posts';
import PostIdPage from '../pages/PostIdPage';
import Login from '../pages/Login';
import NotFoundPage from '../pages/NotFoundPage';

export const privateRoutes = [
  { path: '/todo-list/about', Component: About },
  { path: '/todo-list/posts', Component: Posts },
  { path: '/todo-list/posts/:id', Component: PostIdPage },
	{ path: '/todo-list/login', Component: Login },
	{ path: '/not-found-page', Component: NotFoundPage }
];

export const publicRoutes = [{ path: '/todo-list/login', Component: Login }];
