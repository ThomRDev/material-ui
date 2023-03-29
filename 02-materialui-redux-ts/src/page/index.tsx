import * as React from 'react';
export { default as HomePage } from './home';
// export { default as LoginPage } from './login';
// export { default as CharacterPage } from './character';
export const LoginPage = React.lazy(() => import('./login'));
export const CharacterPage = React.lazy(() => import('./character'));
