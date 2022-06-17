import React from 'react';

import {
  LayoutSider,
  Menu1,
  Logo,
  MenuGroup,
  SubMenu,
  MenuItem,
} from './styles';

const LayoutSiderPage = () => {
  return (
    <LayoutSider>
      <Menu1>
        <Logo />
        <MenuGroup mode="inline">
          <SubMenu title="Produção">
            <MenuItem key="0">Ordens de Produção</MenuItem>
            <MenuItem key="1">Pré-Cork</MenuItem>
          </SubMenu>
          <SubMenu title="Usuários">
            <MenuItem key="0">Usuários</MenuItem>
            <MenuItem key="1">Perfis de Permissão</MenuItem>
          </SubMenu>
          <SubMenu title="Administrativo">
            <MenuItem key="0">Nível de Limpeza</MenuItem>
            <MenuItem key="1">Descarte</MenuItem>
          </SubMenu>
          <SubMenu title="Controle de Qualidade">
            <MenuItem key="0">Revisão de OP</MenuItem>
            <MenuItem key="1">Análise e Aprovação</MenuItem>
          </SubMenu>
          <SubMenu title="PCP">
            <MenuItem key="0">Priorização de OPs</MenuItem>
          </SubMenu>
          <SubMenu title="Dashboard">
            <MenuItem key="0">Painel de OPs</MenuItem>
          </SubMenu>
        </MenuGroup>
      </Menu1>
    </LayoutSider>
  );
};

export default LayoutSiderPage;
