import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, SideNav } from './components';
import { Container, Content, Body } from './styles';

const LandingPage = () => {
  return (
    <Container>
      <SideNav />
      <Body>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Container>
  );
};

export default memo(LandingPage);
