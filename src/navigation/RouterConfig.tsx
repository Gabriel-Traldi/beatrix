import { Routes, Route } from 'react-router-dom';

import Authorization from '../layouts/Authorization';
import LandingPage from '../layouts/LandingPage';

import Login from '../pages/Login';

import * as CONSTANTS from './constants';

export const RouterConfig = () => (
  <Routes>
    <Route path={CONSTANTS.LOGIN} element={<Authorization />}>
      <Route index element={<Login />} />
    </Route>
    <Route path={CONSTANTS.ROOT} element={<LandingPage />}>
      <Route path={CONSTANTS.ROOT} element={<h1>Teste</h1>} />
    </Route>
  </Routes>
);
