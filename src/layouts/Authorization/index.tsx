import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Content, Body } from './styles';

const Authorization = () => {
  return (
    <Container>
      <Body>
        <Content>
          <Outlet />
        </Content>
      </Body>
    </Container>
  );
};

export default memo(Authorization);
