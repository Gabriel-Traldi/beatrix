import { Routes, Route } from 'react-router-dom';
import Autorizacao from '../layouts/Autorizacao';
import Login from '../pages/Login';
import LandingPage from '../layouts/LandingPage';
import OrdensdeProducao from '../pages/OrdensdeProducao';
import CancelarOrdemdeProducaoModal from '../pages/CancelarOrdemdeProducaoModal';
import AprovarAmostraModal from '../pages/AprovarAmostraModal';
import FinalizarPreCorkModal from '../pages/FinalizarPreCorkModal';
import CadastrarDescarteModal from '../pages/CadastrarDescarteModal';
import FinalizarAnaliseModal from '../pages/FinalizarAnaliseModal';
import ReprovarAmostraModal from '../pages/ReprovarAmostraModal';
import AlertaMateriaisModal from '../pages/AlertaMateriaisModal';
import AlterarMateriaisModal from '../pages/AlterarMateriaisModal';
import RevisaodeOrdensdeProducao from '../pages/RevisaodeOrdensdeProducao';
import PriorizacaodeOrdensdeProducao from '../pages/PriorizacaodeOrdensdeProducao';
import AnaliseeAprovacaodeAmostra from '../pages/AnaliseeAprovacaodeAmostra';
import DetalhesOrdemdeProducao from '../pages/DetalhesOrdemdeProducao';
import Usuarios from '../pages/Usuarios';
import PerfisdePermissao from '../pages/PerfisdePermissao';
import PreCork from '../pages/PreCork';
import PreCorkDetalhes from '../pages/PreCorkDetalhes';
import DescartedeMaterial from '../pages/DescartedeMaterial';
import NovoPerfildePermissao from '../pages/NovoPerfildePermissao';
import NovoUsuario from '../pages/NovoUsuario';
import RevisaodeOrdensdeProducaoDetalhes from '../pages/RevisaodeOrdensdeProducaoDetalhes';
import AnaliseeAprovacaodeAmostraDetalhes from '../pages/AnaliseeAprovacaodeAmostraDetalhes';

const IndexRoutes = () => (
  <Routes>
    <Route path="" element={<Autorizacao />} />
    <Route path="/autorizacao" element={<Autorizacao />}>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
    </Route>
    <Route path="/landing-page" element={<LandingPage />}>
      <Route index element={<OrdensdeProducao />} />
      <Route path="ordensde-producao" element={<OrdensdeProducao />} />
      <Route
        path="cancelar-ordemde-producao-modal"
        element={<CancelarOrdemdeProducaoModal />}
      />
      <Route path="aprovar-amostra-modal" element={<AprovarAmostraModal />} />
      <Route
        path="finalizar-pre-cork-modal"
        element={<FinalizarPreCorkModal />}
      />
      <Route
        path="cadastrar-descarte-modal"
        element={<CadastrarDescarteModal />}
      />
      <Route
        path="finalizar-analise-modal"
        element={<FinalizarAnaliseModal />}
      />
      <Route path="reprovar-amostra-modal" element={<ReprovarAmostraModal />} />
      <Route path="reprovar-amostra-modal" element={<ReprovarAmostraModal />} />
      <Route path="reprovar-amostra-modal" element={<ReprovarAmostraModal />} />
      <Route path="aprovar-amostra-modal" element={<AprovarAmostraModal />} />
      <Route path="alerta-materiais-modal" element={<AlertaMateriaisModal />} />
      <Route
        path="alterar-materiais-modal"
        element={<AlterarMateriaisModal />}
      />
      <Route
        path="revisaode-ordensde-producao"
        element={<RevisaodeOrdensdeProducao />}
      />
      <Route
        path="priorizacaode-ordensde-producao"
        element={<PriorizacaodeOrdensdeProducao />}
      />
      <Route
        path="analisee-aprovacaode-amostra"
        element={<AnaliseeAprovacaodeAmostra />}
      />
      <Route
        path="detalhes-ordemde-producao"
        element={<DetalhesOrdemdeProducao />}
      />
      <Route path="usuarios" element={<Usuarios />} />
      <Route path="perfisde-permissao" element={<PerfisdePermissao />} />
      <Route path="pre-cork" element={<PreCork />} />
      <Route path="pre-cork-detalhes" element={<PreCorkDetalhes />} />
      <Route path="descartede-material" element={<DescartedeMaterial />} />
      <Route
        path="novo-perfilde-permissao"
        element={<NovoPerfildePermissao />}
      />
      <Route path="novo-usuario" element={<NovoUsuario />} />
      <Route
        path="revisaode-ordensde-producao-detalhes"
        element={<RevisaodeOrdensdeProducaoDetalhes />}
      />
      <Route
        path="analisee-aprovacaode-amostra-detalhes"
        element={<AnaliseeAprovacaodeAmostraDetalhes />}
      />
    </Route>
  </Routes>
);
export default IndexRoutes;
