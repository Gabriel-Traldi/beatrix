import { memo, useMemo } from 'react';

import { withTranslation, WithTranslation } from 'react-i18next';

import { AsideContainer, Nav, Logo, MenuGroup } from './styles';

interface ItemsMenu {
  key: string;
  label: string;
  children?: ItemsMenu[];
}

const SideNav: React.FC<WithTranslation> = ({ t }) => {
  const ITEMS_MENU: ItemsMenu[] = useMemo(
    () => [
      {
        key: 'producao',
        label: t('production'),
        children: [
          { key: 'ordens-de-producao', label: t('production_orders') },
          { key: 'pre-cork', label: t('pre_cork') },
        ],
      },
      {
        key: 'usuarios',
        label: t('users'),
        children: [
          { key: 'cadastro-usuarios', label: t('users') },
          { key: 'perfis-permissao', label: t('permission_profile') },
        ],
      },
      {
        key: 'administrativo',
        label: t('admin'),
        children: [
          { key: 'nivel-limpeza', label: t('cleaning_level') },
          { key: 'descarte', label: t('discard') },
        ],
      },
      {
        key: 'controle-qualkeyade',
        label: t('quality_control'),
        children: [
          { key: 'revisao-op', label: t('op_revision') },
          { key: 'analise-aprovacao', label: t('review_approval') },
        ],
      },
      {
        key: 'pcp',
        label: t('pcp'),
        children: [{ key: 'priorizacao-ops', label: t('op_prioritization') }],
      },
      {
        key: 'dashboard',
        label: t('dashboard'),
        children: [{ key: 'painel-ops', label: t('op_panel') }],
      },
    ],
    [t],
  );

  return (
    <AsideContainer>
      <Nav>
        <Logo />
        <MenuGroup mode="inline" items={ITEMS_MENU} />
      </Nav>
    </AsideContainer>
  );
};

export default memo(
  withTranslation('translation', { keyPrefix: 'aside_nav' })(SideNav),
);
