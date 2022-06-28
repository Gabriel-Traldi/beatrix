import styled from 'styled-components';

import { Menu } from 'antd';

export const AsideContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 256px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  height: 100%;
  width: 100%;

  background-color: #131212;
  background-repeat: no-repeat;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 115px;
  width: 256px;

  padding: 32px;
  background-repeat: no-repeat;
`;
export const MenuGroup = styled(Menu)`
  flex: 1;
  width: 100%;
`;
