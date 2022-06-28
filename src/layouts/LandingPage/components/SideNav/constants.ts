interface ItemsMenu {
  id: string;
  title: string;
  submenus?: ItemsMenu[];
}

export const ITEMS_MENU: ItemsMenu[] = [
  {
    id: 'producao',
    title: 'Produção',
    submenus: [
      { id: 'ordens-de-producao', title: 'Ordens de Produção' },
      { id: 'pre-cork', title: 'Pré-Cork' },
    ],
  },
  {
    id: 'usuarios',
    title: 'Usuários',
    submenus: [
      { id: 'cadastro-usuarios', title: 'Usuários' },
      { id: 'perfis-permissao', title: 'Pré-Cork' },
    ],
  },
  {
    id: 'administrativo',
    title: 'Administrativo',
    submenus: [
      { id: 'nivel-limpeza', title: 'Nível de Limpeza' },
      { id: 'descarte', title: 'Descarte' },
    ],
  },
  {
    id: 'controle-qualidade',
    title: 'Administrativo',
    submenus: [
      { id: 'revisao-op', title: 'Revisão de OP' },
      { id: 'analise-aprovacao', title: 'Análise e Aprovação' },
    ],
  },
  {
    id: 'pcp',
    title: 'PCP',
    submenus: [{ id: 'priorizacao-ops', title: 'Priorização de OPs' }],
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    submenus: [{ id: 'painel-ops', title: 'Painel de OPs' }],
  },
];
