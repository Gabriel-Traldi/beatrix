import React from 'react';

import {
  PreCork1,
  PageHeader9,
  Header12,
  PreCork,
  Body19,
  Checkbox19Row1Column01,
  CheckboxInactiveDefault13,
  TagStatus18Row1Column61,
  Error5,
  Checkbox20Row2Column01,
  CheckboxInactiveDefault14,
  TagStatus19Row2Column61,
  Default6,
  Checkbox21Row3Column01,
  CheckboxInactiveDefault15,
  TagStatus20Row3Column61,
  Success6,
  ColumnPreCorkTable,
  PreCorkTable,
} from './styles';

const PreCorkPage = () => {
  const dataSourcePreCorkTable = [
    {
      key: '0',
      checkbox50: [
        <Checkbox19Row1Column01>
          <CheckboxInactiveDefault13 />
        </Checkbox19Row1Column01>,
      ],
      title1241: '1014612193',
      title1252: '179719 - João da Silva',
      title1263: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1274: 'Tinta',
      title1285: 'Make & Pack',
      status146: [
        <TagStatus18Row1Column61>
          <Error5>Inconsistência</Error5>
        </TagStatus18Row1Column61>,
      ],
    },
    {
      key: '1',
      checkbox50: [
        <Checkbox20Row2Column01>
          <CheckboxInactiveDefault14 />
        </Checkbox20Row2Column01>,
      ],
      title1241: '1014612194',
      title1252: '773720 - Mario Barbosa',
      title1263: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1274: 'Tinta',
      title1285: 'Make & Pack',
      status146: [
        <TagStatus19Row2Column61>
          <Default6>Revisar</Default6>
        </TagStatus19Row2Column61>,
      ],
    },
    {
      key: '2',
      checkbox50: [
        <Checkbox21Row3Column01>
          <CheckboxInactiveDefault15 />
        </Checkbox21Row3Column01>,
      ],
      title1241: '1014612195',
      title1252: '379721 - John Carlos',
      title1263: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1274: 'Verniz',
      title1285: 'Make & Pack',
      status146: [
        <TagStatus20Row3Column61>
          <Success6>Concluída</Success6>
        </TagStatus20Row3Column61>,
      ],
    },
  ];

  return (
    <PreCork1>
      <PageHeader9>
        <Header12>
          <PreCork>Pré-Cork</PreCork>
        </Header12>
      </PageHeader9>
      <Body19>
        <PreCorkTable dataSource={dataSourcePreCorkTable}>
          <ColumnPreCorkTable
            title=""
            dataIndex="checkbox50"
            key="checkbox50"
            align="center"
            width="48px"
          />
          <ColumnPreCorkTable
            title="OP"
            dataIndex="title1241"
            key="title1241"
            align="left"
            filters={[
              { text: '1014612193', value: '1014612193' },
              { text: '1014612194', value: '1014612194' },
              { text: '1014612195', value: '1014612195' },
            ]}
            width="111px"
            onFilter={(value, record: any) =>
              record.title1241.indexOf(value) === 0
            }
          />
          <ColumnPreCorkTable
            title="Cliente"
            dataIndex="title1252"
            key="title1252"
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
            ]}
            width="552.5px"
            onFilter={(value, record: any) =>
              record.title1252.indexOf(value) === 0
            }
          />
          <ColumnPreCorkTable
            title="Produto"
            dataIndex="title1263"
            key="title1263"
            align="left"
            filters={[
              {
                text: '91330712 242259A: PRETO 2 FR 395665:FK22',
                value: '91330712 242259A: PRETO 2 FR 395665:FK22',
              },
            ]}
            width="552.5px"
            onFilter={(value, record: any) =>
              record.title1263.indexOf(value) === 0
            }
          />
          <ColumnPreCorkTable
            title="Categoria"
            dataIndex="title1274"
            key="title1274"
            align="left"
            filters={[
              { text: 'Tinta', value: 'Tinta' },
              { text: 'Verniz', value: 'Verniz' },
            ]}
            width="113px"
            onFilter={(value, record: any) =>
              record.title1274.indexOf(value) === 0
            }
          />
          <ColumnPreCorkTable
            title="Tipo"
            dataIndex="title1285"
            key="title1285"
            align="left"
            filters={[{ text: 'Make & Pack', value: 'Make & Pack' }]}
            width="113px"
            onFilter={(value, record: any) =>
              record.title1285.indexOf(value) === 0
            }
          />
          <ColumnPreCorkTable
            title="Status"
            dataIndex="status146"
            key="status146"
            align="left"
            width="126px"
          />
        </PreCorkTable>
      </Body19>
    </PreCork1>
  );
};

export default PreCorkPage;
