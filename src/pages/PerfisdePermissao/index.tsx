import React from 'react';

import { useNavigate } from 'react-router-dom';
import { PlusOutlined, MoreOutlined } from '@ant-design/icons';

import {
  PerfisdePermissao2,
  PageHeader7,
  Header10,
  PerfisdePermissao,
  Actions4,
  ButtonNewProfile,
  Body15,
  Checkbox16Row1Column01,
  CheckboxInactiveDefault11,
  Content36Row1Column11,
  ActionsButton7,
  TagStatus16Row1Column31,
  Success5,
  Checkbox17Row2Column01,
  CheckboxInactiveDefault12,
  Content37Row2Column11,
  ActionsButton8,
  TagStatus17Row2Column31,
  Default5,
  ColumnPerfisdePermissaoTable,
  PerfisdePermissaoTable,
} from './styles';

const PerfisdePermissaoPage = () => {
  const navigate = useNavigate();
  const dataSourcePerfisdePermissaoTable = [
    {
      key: '0',
      checkbox40: [
        <Checkbox16Row1Column01>
          <CheckboxInactiveDefault11 />
        </Checkbox16Row1Column01>,
      ],
      title1: [
        <Content36Row1Column11>
          <ActionsButton7 type="text" icon={<MoreOutlined />} size="small" />
        </Content36Row1Column11>,
      ],
      title1202: 'ADM LVL1',
      status133: [
        <TagStatus16Row1Column31>
          <Success5>Ativo</Success5>
        </TagStatus16Row1Column31>,
      ],
    },
    {
      key: '1',
      checkbox40: [
        <Checkbox17Row2Column01>
          <CheckboxInactiveDefault12 />
        </Checkbox17Row2Column01>,
      ],
      title1: [
        <Content37Row2Column11>
          <ActionsButton8 type="text" icon={<MoreOutlined />} size="small" />
        </Content37Row2Column11>,
      ],
      title1202: 'ADM LVL2',
      status133: [
        <TagStatus17Row2Column31>
          <Default5>Inativo</Default5>
        </TagStatus17Row2Column31>,
      ],
    },
  ];

  const navigateToNovoPerfildePermissao = () => {
    navigate('/landing-page/novo-perfilde-permissao');
  };

  return (
    <PerfisdePermissao2>
      <PageHeader7>
        <Header10>
          <PerfisdePermissao>Perfis de Permissão</PerfisdePermissao>
          <Actions4>
            <ButtonNewProfile
              onClick={navigateToNovoPerfildePermissao}
              type="default"
              icon={<PlusOutlined />}
            >
              Novo Perfil
            </ButtonNewProfile>
          </Actions4>
        </Header10>
      </PageHeader7>
      <Body15>
        <PerfisdePermissaoTable dataSource={dataSourcePerfisdePermissaoTable}>
          <ColumnPerfisdePermissaoTable
            title=""
            dataIndex="checkbox40"
            key="checkbox40"
            align="center"
            width="48px"
          />
          <ColumnPerfisdePermissaoTable
            title="Title"
            dataIndex="title1"
            key="title1"
            align="left"
            width="56px"
          />
          <ColumnPerfisdePermissaoTable
            title="Perfil"
            dataIndex="title1202"
            key="title1202"
            align="left"
            filters={[
              { text: 'ADM LVL1', value: 'ADM LVL1' },
              { text: 'ADM LVL2', value: 'ADM LVL2' },
            ]}
            width="1419px"
            onFilter={(value, record: any) =>
              record.title1202.indexOf(value) === 0
            }
          />
          <ColumnPerfisdePermissaoTable
            title="Status"
            dataIndex="status133"
            key="status133"
            align="left"
            width="93px"
          />
        </PerfisdePermissaoTable>
      </Body15>
    </PerfisdePermissao2>
  );
};

export default PerfisdePermissaoPage;
