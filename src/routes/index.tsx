import { Routes, Route } from 'react-router-dom'
import Autorizacao from '../layouts/Autorizacao';
import Login from '../../src/pages/Login';
import LandingPage from '../layouts/LandingPage';
import OrdensdeProducao from '../../src/pages/OrdensdeProducao';
import CancelarOrdemdeProducaoModal from '../../src/pages/CancelarOrdemdeProducaoModal';
import AprovarAmostraModal from '../../src/pages/AprovarAmostraModal';
import FinalizarPreCorkModal from '../../src/pages/FinalizarPreCorkModal';
import CadastrarDescarteModal from '../../src/pages/CadastrarDescarteModal';
import FinalizarAnaliseModal from '../../src/pages/FinalizarAnaliseModal';
import ReprovarAmostraModal from '../../src/pages/ReprovarAmostraModal';
import AlertaMateriaisModal from '../../src/pages/AlertaMateriaisModal';
import AlterarMateriaisModal from '../../src/pages/AlterarMateriaisModal';
import RevisaodeOrdensdeProducao from '../../src/pages/RevisaodeOrdensdeProducao';
import PriorizacaodeOrdensdeProducao from '../../src/pages/PriorizacaodeOrdensdeProducao';
import AnaliseeAprovacaodeAmostra from '../../src/pages/AnaliseeAprovacaodeAmostra';
import DetalhesOrdemdeProducao from '../../src/pages/DetalhesOrdemdeProducao';
import Usuarios from '../../src/pages/Usuarios';
import PerfisdePermissao from '../../src/pages/PerfisdePermissao';
import PreCork from '../../src/pages/PreCork';
import PreCorkDetalhes from '../../src/pages/PreCorkDetalhes';
import DescartedeMaterial from '../../src/pages/DescartedeMaterial';
import NovoPerfildePermissao from '../../src/pages/NovoPerfildePermissao';
import NovoUsuario from '../../src/pages/NovoUsuario';
import RevisaodeOrdensdeProducaoDetalhes from '../../src/pages/RevisaodeOrdensdeProducaoDetalhes';
import AnaliseeAprovacaodeAmostraDetalhes from '../../src/pages/AnaliseeAprovacaodeAmostraDetalhes';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<Autorizacao/>} />
<Route  path='/autorizacao' element={<Autorizacao/>} >
<Route index  element={<Login/>} />
<Route  path='login' element={<Login/>} />
</Route>
<Route  path='/landing-page' element={<LandingPage/>} >
<Route index  element={<OrdensdeProducao/>} />
<Route  path='ordensde-producao' element={<OrdensdeProducao/>} />
<Route  path='cancelar-ordemde-producao-modal' element={<CancelarOrdemdeProducaoModal/>} />
<Route  path='aprovar-amostra-modal' element={<AprovarAmostraModal/>} />
<Route  path='finalizar-pre-cork-modal' element={<FinalizarPreCorkModal/>} />
<Route  path='cadastrar-descarte-modal' element={<CadastrarDescarteModal/>} />
<Route  path='finalizar-analise-modal' element={<FinalizarAnaliseModal/>} />
<Route  path='reprovar-amostra-modal' element={<ReprovarAmostraModal/>} />
<Route  path='reprovar-amostra-modal' element={<ReprovarAmostraModal/>} />
<Route  path='reprovar-amostra-modal' element={<ReprovarAmostraModal/>} />
<Route  path='aprovar-amostra-modal' element={<AprovarAmostraModal/>} />
<Route  path='alerta-materiais-modal' element={<AlertaMateriaisModal/>} />
<Route  path='alterar-materiais-modal' element={<AlterarMateriaisModal/>} />
<Route  path='revisaode-ordensde-producao' element={<RevisaodeOrdensdeProducao/>} />
<Route  path='priorizacaode-ordensde-producao' element={<PriorizacaodeOrdensdeProducao/>} />
<Route  path='analisee-aprovacaode-amostra' element={<AnaliseeAprovacaodeAmostra/>} />
<Route  path='detalhes-ordemde-producao' element={<DetalhesOrdemdeProducao/>} />
<Route  path='usuarios' element={<Usuarios/>} />
<Route  path='perfisde-permissao' element={<PerfisdePermissao/>} />
<Route  path='pre-cork' element={<PreCork/>} />
<Route  path='pre-cork-detalhes' element={<PreCorkDetalhes/>} />
<Route  path='descartede-material' element={<DescartedeMaterial/>} />
<Route  path='novo-perfilde-permissao' element={<NovoPerfildePermissao/>} />
<Route  path='novo-usuario' element={<NovoUsuario/>} />
<Route  path='revisaode-ordensde-producao-detalhes' element={<RevisaodeOrdensdeProducaoDetalhes/>} />
<Route  path='analisee-aprovacaode-amostra-detalhes' element={<AnaliseeAprovacaodeAmostraDetalhes/>} />
</Route>
</Routes>
);
export default IndexRoutes;
