import React from 'react';

import { MoreOutlined } from '@ant-design/icons';

import {
  OrdensdeProducao2,
  PageHeader,
  Header1,
  OrdensdeProducao,
  Quintafeira10032022,
  Buttons,
  Body,
  ContentRow1Column01,
  ActionsButton,
  Content1Row1Column71,
  TagStatus,
  Default1,
  Content2Row2Column01,
  ActionsButton1,
  Content3Row2Column71,
  TagStatus1,
  Processing1,
  Content4Row3Column01,
  ActionsButton2,
  Content5Row3Column71,
  TagStatus2,
  Success1,
  Content6Row4Column01,
  ActionsButton3,
  Content7Row4Column71,
  TagStatus3,
  Warning1,
  Content8Row5Column01,
  ActionsButton4,
  Content9Row5Column71,
  TagStatus4,
  Error1,
  ColumnTableGroup,
  TableGroup,
} from './styles';

const OrdensdeProducaoPage = () => {
  const dataSourceTableGroup = [
    {
      key: '0',
      title810: [
        <ContentRow1Column01>
          <ActionsButton type="text" icon={<MoreOutlined />} size="small" />
        </ContentRow1Column01>,
      ],
      title821: '1014612193',
      title832: '179719 - João da Silva',
      title843: '91330712 242259A:PRETO 2',
      title854: 'Tinta',
      title865: 'Make & Pack',
      title876: 'Pesagem',
      status87: [
        <Content1Row1Column71>
          <TagStatus>
            <Default1>Não iniciado</Default1>
          </TagStatus>
        </Content1Row1Column71>,
      ],
    },
    {
      key: '1',
      title810: [
        <Content2Row2Column01>
          <ActionsButton1 type="text" icon={<MoreOutlined />} size="small" />
        </Content2Row2Column01>,
      ],
      title821: '1014612194',
      title832: '773720 - Mario Barbosa',
      title843: '91330712 242259A:PRETO 2',
      title854: 'Verniz',
      title865: 'Make & Pack',
      title876: 'Homogenização',
      status87: [
        <Content3Row2Column71>
          <TagStatus1>
            <Processing1>Em andamento</Processing1>
          </TagStatus1>
        </Content3Row2Column71>,
      ],
    },
    {
      key: '2',
      title810: [
        <Content4Row3Column01>
          <ActionsButton2 type="text" icon={<MoreOutlined />} size="small" />
        </Content4Row3Column01>,
      ],
      title821: '1014612195',
      title832: '379721 - John Carlos',
      title843: '91330712 242259A:PRETO 2',
      title854: 'Solvente',
      title865: 'Make & Pack',
      title876: 'CQ',
      status87: [
        <Content5Row3Column71>
          <TagStatus2>
            <Success1>Concluída</Success1>
          </TagStatus2>
        </Content5Row3Column71>,
      ],
    },
    {
      key: '3',
      title810: [
        <Content6Row4Column01>
          <ActionsButton3 type="text" icon={<MoreOutlined />} size="small" />
        </Content6Row4Column01>,
      ],
      title821: '1014612196',
      title832: '879722 - Flávio Augusto',
      title843: '91330712 242259A:PRETO 2',
      title854: 'Tinta',
      title865: 'Make & Pack',
      title876: 'Envase',
      status87: [
        <Content7Row4Column71>
          <TagStatus3>
            <Warning1>Atenção</Warning1>
          </TagStatus3>
        </Content7Row4Column71>,
      ],
    },
    {
      key: '4',
      title810: [
        <Content8Row5Column01>
          <ActionsButton4 type="text" icon={<MoreOutlined />} size="small" />
        </Content8Row5Column01>,
      ],
      title821: '1014612197',
      title832: '179719 - João da Silva',
      title843: '91330712 242259A:PRETO 2',
      title854: 'Verniz',
      title865: 'Make & Pack',
      title876: 'Rotulagem',
      status87: [
        <Content9Row5Column71>
          <TagStatus4>
            <Error1>Cancelada</Error1>
          </TagStatus4>
        </Content9Row5Column71>,
      ],
    },
  ];

  return (
    <OrdensdeProducao2>
      <PageHeader>
        <Header1>
          <OrdensdeProducao>Ordens de Produção</OrdensdeProducao>
          <Quintafeira10032022>Quinta-feira, 10/03/2022</Quintafeira10032022>
          <Buttons />
        </Header1>
      </PageHeader>
      <Body>
        <TableGroup dataSource={dataSourceTableGroup}>
          <ColumnTableGroup
            title="Ação"
            dataIndex="title810"
            key="title810"
            align="center"
            width="65px"
          />
          <ColumnTableGroup
            title="OP"
            dataIndex="title821"
            key="title821"
            align="left"
            filters={[
              { text: '1014612193', value: '1014612193' },
              { text: '1014612194', value: '1014612194' },
              { text: '1014612195', value: '1014612195' },
              { text: '1014612196', value: '1014612196' },
              { text: '1014612197', value: '1014612197' },
            ]}
            width="221.5712890625px"
            onFilter={(value, record: any) =>
              record.title821.indexOf(value) === 0
            }
          />
          <ColumnTableGroup
            title="Cliente"
            dataIndex="title832"
            key="title832"
            align="left"
            filters={[
              {
                text: '179719 - João da Silva',
                value: '179719 - João da Silva',
              },
              {
                text: '773720 - Mario Barbosa',
                value: '773720 - Mario Barbosa',
              },
              { text: '379721 - John Carlos', value: '379721 - John Carlos' },
              {
                text: '879722 - Flávio Augusto',
                value: '879722 - Flávio Augusto',
              },
            ]}
            width="221.5712890625px"
            onFilter={(value, record: any) =>
              record.title832.indexOf(value) === 0
            }
          />
          <ColumnTableGroup
            title="Produto"
            dataIndex="title843"
            key="title843"
            align="left"
            filters={[
              {
                text: '91330712 242259A:PRETO 2',
                value: '91330712 242259A:PRETO 2',
              },
            ]}
            width="221.5712890625px"
            onFilter={(value, record: any) =>
              record.title843.indexOf(value) === 0
            }
          />
          <ColumnTableGroup
            title="Categoria"
            dataIndex="title854"
            key="title854"
            align="left"
            filters={[
              { text: 'Tinta', value: 'Tinta' },
              { text: 'Verniz', value: 'Verniz' },
              { text: 'Solvente', value: 'Solvente' },
            ]}
            width="221.5712890625px"
            onFilter={(value, record: any) =>
              record.title854.indexOf(value) === 0
            }
          />
          <ColumnTableGroup
            title="Tipo"
            dataIndex="title865"
            key="title865"
            align="left"
            width="221.5712890625px"
          />
          <ColumnTableGroup
            title="Etapa"
            dataIndex="title876"
            key="title876"
            align="left"
            width="221.5712890625px"
          />
          <ColumnTableGroup
            title="Status"
            dataIndex="status87"
            key="status87"
            align="left"
            width="221.5712890625px"
          />
        </TableGroup>
      </Body>
    </OrdensdeProducao2>
  );
};

export default OrdensdeProducaoPage;
