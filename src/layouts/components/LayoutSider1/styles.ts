import styled from 'styled-components';

import { Menu } from 'antd';
// import Menu1Image from './assets/979_114460.png';
import LogoImage from './assets/979_114461.png';

export const LayoutSider = styled.div`
  height: 100%;
  width: 256px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`;
export const Menu1 = styled.div`
  height: 100%;
  width: 256px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 4px;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #131212;
  // background: url(${Menu1Image});
  background-repeat: no-repeat;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
`;
export const Logo = styled.div`
  height: 115px;
  width: 256px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background: url(${LogoImage});
  background-repeat: no-repeat;
`;
export const MenuGroup = styled(Menu)`
  width: 256px;
  height: 696px;
`;

export const SubMenu = styled(Menu.SubMenu)``;

export const MenuItem = styled(Menu.Item)``;
