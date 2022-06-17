import React from 'react';

import { useNavigate } from 'react-router-dom';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import GenericCodeButton from '../../components/Button';

import {
  RevisaodeOrdensdeProducao1,
  PageHeader1,
  Header3,
  RevisaodeOrdensdeProducao,
  Buttons1,
  ButtonApproval1,
  Body3,
  Checkbox1Row1Column01,
  CheckboxInactiveDefault,
  Content10Row1Column61,
  TagStatus5,
  Default2,
  Content11Row1Column71,
  ButtonReproval3,
  ButtonApproval2,
  Checkbox2Row2Column01,
  CheckboxInactiveDefault1,
  Content12Row2Column61,
  TagStatus6,
  Error2,
  Content13Row2Column71,
  ButtonReproval4,
  ButtonApproval3,
  ColumnFrameComponentrevisaodeordens,
  FrameComponentrevisaodeordens,
} from './styles';

const RevisaodeOrdensdeProducaoPage = () => {
  const navigate = useNavigate();

  const navigateToAlertaMateriaisModal = () => {
    navigate('/landing-page/alerta-materiais-modal');
  };

  const navigateToCancelarOrdemdeProducaoModal = () => {
    navigate('/landing-page/cancelar-ordemde-producao-modal');
  };

  const dataSourceFrameComponentrevisaodeordens = [
    {
      key: '0',
      checkbox0: [
        <Checkbox1Row1Column01>
          <CheckboxInactiveDefault />
        </Checkbox1Row1Column01>,
      ],
      title891: '1014612193',
      title902: '179717 - João da Silva',
      title913: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title924: 'Tinta',
      title935: 'Make & Pack',
      status96: [
        <Content10Row1Column61>
          <TagStatus5>
            <Default2>Aguardando Revisão</Default2>
          </TagStatus5>
        </Content10Row1Column61>,
      ],
      title947: [
        <Content11Row1Column71>
          <ButtonReproval3
            onClick={navigateToCancelarOrdemdeProducaoModal}
            danger
            type="default"
            icon={<CloseOutlined />}
          />
          <ButtonApproval2
            onClick={navigateToAlertaMateriaisModal}
            type="default"
            icon={<CheckOutlined />}
          />
        </Content11Row1Column71>,
      ],
    },
    {
      key: '1',
      checkbox0: [
        <Checkbox2Row2Column01>
          <CheckboxInactiveDefault1 />
        </Checkbox2Row2Column01>,
      ],
      title891: '1014612194',
      title902: '773720 - Mario Barbosa',
      title913: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title924: 'Verniz',
      title935: 'Make & Pack',
      status96: [
        <Content12Row2Column61>
          <TagStatus6>
            <Error2>Cancelada</Error2>
          </TagStatus6>
        </Content12Row2Column61>,
      ],
      title947: [
        <Content13Row2Column71>
          <ButtonReproval4 danger type="default" icon={<CloseOutlined />} />
          <ButtonApproval3 type="default" icon={<CheckOutlined />} />
        </Content13Row2Column71>,
      ],
    },
  ];

  return (
    <RevisaodeOrdensdeProducao1>
      <PageHeader1>
        <Header3>
          <RevisaodeOrdensdeProducao>
            Revisão de Ordens de Produção
          </RevisaodeOrdensdeProducao>
          <Buttons1>
            <GenericCodeButton type="link">
              Esqueci minha senha
            </GenericCodeButton>
            <ButtonApproval1
              onClick={navigateToAlertaMateriaisModal}
              type="default"
              icon={<CheckOutlined />}
            >
              Aprovar OP
            </ButtonApproval1>
          </Buttons1>
        </Header3>
      </PageHeader1>
      <Body3>
        <FrameComponentrevisaodeordens
          dataSource={dataSourceFrameComponentrevisaodeordens}
        >
          <ColumnFrameComponentrevisaodeordens
            title=""
            dataIndex="checkbox0"
            key="checkbox0"
            align="center"
            width="48px"
          />
          <ColumnFrameComponentrevisaodeordens
            title="OP"
            dataIndex="title891"
            key="title891"
            align="left"
            filters={[
              { text: '1014612193', value: '1014612193' },
              { text: '1014612194', value: '1014612194' },
            ]}
            width="111px"
            onFilter={(value, record: any) =>
              record.title891.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentrevisaodeordens
            title="Cliente"
            dataIndex="title902"
            key="title902"
            align="left"
            filters={[
              {
                text: '179717 - João da Silva',
                value: '179717 - João da Silva',
              },
              {
                text: '773720 - Mario Barbosa',
                value: '773720 - Mario Barbosa',
              },
            ]}
            width="480px"
            onFilter={(value, record: any) =>
              record.title902.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentrevisaodeordens
            title="Produto"
            dataIndex="title913"
            key="title913"
            align="left"
            filters={[
              {
                text: '91330712 242259A: PRETO 2 FR 395665:FK22',
                value: '91330712 242259A: PRETO 2 FR 395665:FK22',
              },
            ]}
            width="480px"
            onFilter={(value, record: any) =>
              record.title913.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentrevisaodeordens
            title="Categoria"
            dataIndex="title924"
            key="title924"
            align="left"
            filters={[
              { text: 'Tinta', value: 'Tinta' },
              { text: 'Verniz', value: 'Verniz' },
            ]}
            width="113px"
            onFilter={(value, record: any) =>
              record.title924.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentrevisaodeordens
            title="Tipo"
            dataIndex="title935"
            key="title935"
            align="left"
            filters={[{ text: 'Make & Pack', value: 'Make & Pack' }]}
            width="113px"
            onFilter={(value, record: any) =>
              record.title935.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentrevisaodeordens
            title="Status"
            dataIndex="status96"
            key="status96"
            align="left"
            width="159px"
          />
          <ColumnFrameComponentrevisaodeordens
            title="Ação"
            dataIndex="title947"
            key="title947"
            align="left"
            width="112px"
          />
        </FrameComponentrevisaodeordens>
      </Body3>
    </RevisaodeOrdensdeProducao1>
  );
};

export default RevisaodeOrdensdeProducaoPage;
