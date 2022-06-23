import { Routes, Route } from 'react-router-dom';

import Autorizacao from '../layouts/Autorizacao';
import LandingPage from '../layouts/LandingPage';

import Login from '../pages/Login';
import OrdensdeProducao from '../pages/OrdensdeProducao';

const IndexRoutes = () => (
  <Routes>
    <Route path="/login" element={<Autorizacao />}>
      <Route index element={<Login />} />
    </Route>
    <Route path="/" element={<LandingPage />}>
      <Route path="/ordens-de-producao" element={<OrdensdeProducao />} />
    </Route>
  </Routes>
);
export default IndexRoutes;
