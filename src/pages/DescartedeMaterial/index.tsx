import React from 'react';

import { useNavigate } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';

import {
  DescartedeMaterial1,
  PageHeader11,
  Header14,
  DescartedeMaterial,
  Actions7,
  ButtonNewDiscard,
  Body24,
  ColumnDescartedeMaterialTable,
  DescartedeMaterialTable,
} from './styles';

const DescartedeMaterialPage = () => {
  let navigate = useNavigate();
  const dataSourceDescartedeMaterialTable = [
    {
      key: '0',
      title1440: '13/04/2022',
      title1451: '11:25 (BRT)',
      title1462: '1014612193',
      title1473: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1484: '189',
      title1495: '10 Kg',
      title1506: 'XPTO',
      title1517: 'user02',
    },
    {
      key: '1',
      title1440: '13/04/2022',
      title1451: '09:13 (BRT)',
      title1462: '1014612192',
      title1473: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1484: '256',
      title1495: '5,8 Kg',
      title1506: 'XPTO',
      title1517: 'user01',
    },
  ];

  const navigateToCadastrarDescarteModal = () => {
    navigate('/landing-page/cadastrar-descarte-modal');
  };

  return (
    <DescartedeMaterial1>
      <PageHeader11>
        <Header14>
          <DescartedeMaterial>Descarte de Material</DescartedeMaterial>
          <Actions7>
            <ButtonNewDiscard
              onClick={navigateToCadastrarDescarteModal}
              type="default"
              icon={<PlusOutlined />}
              onClick={navigateToCadastrarDescarteModal}
            >
              Cadastrar Descarte
            </ButtonNewDiscard>
          </Actions7>
        </Header14>
      </PageHeader11>
      <Body24>
        <DescartedeMaterialTable dataSource={dataSourceDescartedeMaterialTable}>
          <ColumnDescartedeMaterialTable
            title="Data"
            dataIndex="title1440"
            key="title1440"
            align="left"
            width="107px"
          />
          <ColumnDescartedeMaterialTable
            title="Horário"
            dataIndex="title1451"
            key="title1451"
            align="left"
            width="106px"
          />
          <ColumnDescartedeMaterialTable
            title="OP"
            dataIndex="title1462"
            key="title1462"
            align="left"
            width="111px"
          />
          <ColumnDescartedeMaterialTable
            title="Produto"
            dataIndex="title1473"
            key="title1473"
            align="left"
            filters={[
              {
                text: '91330712 242259A: PRETO 2 FR 395665:FK22',
                value: '91330712 242259A: PRETO 2 FR 395665:FK22',
              },
            ]}
            width="868px"
            onFilter={(value, record: any) =>
              record.title1473.indexOf(value) === 0
            }
          />
          <ColumnDescartedeMaterialTable
            title="Lote"
            dataIndex="title1484"
            key="title1484"
            align="left"
            filters={[
              { text: '189', value: '189' },
              { text: '256', value: '256' },
            ]}
            width="80px"
            onFilter={(value, record: any) =>
              record.title1484.indexOf(value) === 0
            }
          />
          <ColumnDescartedeMaterialTable
            title="Quantidade"
            dataIndex="title1495"
            key="title1495"
            align="left"
            filters={[
              { text: '10 Kg', value: '10 Kg' },
              { text: '5,8 Kg', value: '5,8 Kg' },
            ]}
            width="124px"
            onFilter={(value, record: any) =>
              record.title1495.indexOf(value) === 0
            }
          />
          <ColumnDescartedeMaterialTable
            title="Recipiente"
            dataIndex="title1506"
            key="title1506"
            align="left"
            width="119px"
          />
          <ColumnDescartedeMaterialTable
            title="Usuário"
            dataIndex="title1517"
            key="title1517"
            align="left"
            width="101px"
          />
        </DescartedeMaterialTable>
      </Body24>
    </DescartedeMaterial1>
  );
};

export default DescartedeMaterialPage;
