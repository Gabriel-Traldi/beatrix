import React from 'react';

import { Outlet } from 'react-router-dom';

import { Autorizacao, Content, Body } from './styles';

const AutorizacaoPage = () => {
  return (
    <Autorizacao>
      <Body>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Autorizacao>
  );
};

export default AutorizacaoPage;
