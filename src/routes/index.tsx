import { Routes, Route } from 'react-router-dom'
import Autorizacao from '../layouts/Autorizacao';
import Login from '../../src/pages/Login';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<Autorizacao/>} />
<Route  path='/autorizacao' element={<Autorizacao/>} >
<Route index  element={<Login/>} />
<Route  path='login' element={<Login/>} />
</Route>
</Routes>
);
export default IndexRoutes;
