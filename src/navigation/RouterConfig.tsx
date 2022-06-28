import { Routes, Route } from 'react-router-dom';

import Authorization from '../layouts/Authorization';
import LandingPage from '../layouts/LandingPage';

import Login from '../pages/Login';
import Suspense from './components/Suspsense';

import * as CONSTANTS from './constants';

export const RouterConfig = () => (
  <Routes>
    <Route path={CONSTANTS.LOGIN} element={<Authorization />}>
      <Route index element={<Login />} />
    </Route>
    <Route path={CONSTANTS.ROOT} element={<LandingPage />}>
      <Route
        path={CONSTANTS.ROOT}
        element={
          <Suspense>
            <h1>Teste</h1>
          </Suspense>
        }
      />
    </Route>
  </Routes>
);
