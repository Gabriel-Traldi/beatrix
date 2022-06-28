import { memo } from 'react';

import { ITEMS_MENU } from './constants';
import {
  AsideContainer,
  Nav,
  Logo,
  MenuGroup,
  SubMenu,
  MenuItem,
} from './styles';

const SideNav = () => {
  return (
    <AsideContainer>
      <Nav>
        <Logo />
        <MenuGroup mode="inline">
          {ITEMS_MENU.map(item =>
            item.submenus ? (
              <SubMenu key={item.id} title={item.title}>
                {item.submenus.map(submenu => (
                  <MenuItem key={submenu.id}>{submenu.title}</MenuItem>
                ))}
              </SubMenu>
            ) : (
              <MenuItem key={item.id}>{item.title}</MenuItem>
            ),
          )}
        </MenuGroup>
      </Nav>
    </AsideContainer>
  );
};

export default memo(SideNav);
