import React from 'react';

import {
  FlagOutlined,
  CalendarOutlined,
  SaveOutlined,
  MenuOutlined,
  FlagFilled,
} from '@ant-design/icons';

import { Calendar } from 'antd';
import GenericInputDate from '../../components/InputDate';

import {
  FrameComponentpriorizacaodeor,
  PageHeader3,
  Header6,
  TextComponentpriorizao,
  Actions2,
  ButtonPriority,
  ButtonDate,
  ButtonSave,
  Body8,
  Checkbox4Row1Column01,
  CheckboxInactiveDefault2,
  Content22Row1Column11,
  ButtonPriority1,
  DragHandler,
  InputPrioridade,
  TagStatus7Row1Column91,
  Default3,
  Checkbox5Row2Column01,
  CheckboxInactiveDefault3,
  Content23Row2Column11,
  ButtonPriority2,
  DragHandler1,
  InputPrioridade1,
  TagStatus8Row2Column91,
  Warning2,
  Checkbox6Row3Column01,
  CheckboxInactiveDefault4,
  Content24Row3Column11,
  ButtonPriority3,
  DragHandler2,
  InputPrioridade2,
  TagStatus9Row3Column91,
  Error3,
  Checkbox7Row4Column01,
  CheckboxInactiveDefault5,
  Content25Row4Column11,
  ButtonPriority4,
  DragHandler3,
  InputPrioridade3,
  TagStatus10Row4Column91,
  Success2,
  ColumnFrameComponentpriorizacaodeor1,
  FrameComponentpriorizacaodeor1,
} from './styles';

const PriorizacaodeOrdensdeProducaoPage = () => {
  const dataSourceFrameComponentpriorizacaodeor1 = [
    {
      key: '0',
      checkbox10: [
        <Checkbox4Row1Column01>
          <CheckboxInactiveDefault2 />
        </Checkbox4Row1Column01>,
      ],
      title1: [
        <Content22Row1Column11>
          <ButtonPriority1 type="text" icon={<FlagOutlined />} size="small" />
          <DragHandler type="text" icon={<MenuOutlined />} size="small" />
        </Content22Row1Column11>,
      ],
      title992: [<InputPrioridade placeholder="0" />],
      title1003: [
        <GenericInputDate
          placeholder="Select time"
          format="DD/MM/YYYY"
          suffixIcon={<Calendar />}
        />,
      ],
      title1014: '1014612196',
      title1025: '879722 - Flávio Augusto',
      title1036: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1047: '23-03-2022',
      title1058: 'Make & Pack',
      status109: [
        <TagStatus7Row1Column91>
          <Default3>Em produção</Default3>
        </TagStatus7Row1Column91>,
      ],
    },
    {
      key: '1',
      checkbox10: [
        <Checkbox5Row2Column01>
          <CheckboxInactiveDefault3 />
        </Checkbox5Row2Column01>,
      ],
      title1: [
        <Content23Row2Column11>
          <ButtonPriority2 type="text" icon={<FlagOutlined />} size="small" />
          <DragHandler1 type="text" icon={<MenuOutlined />} size="small" />
        </Content23Row2Column11>,
      ],
      title992: [<InputPrioridade1 placeholder="0" />],
      title1003: [
        <GenericInputDate
          placeholder="Select time"
          format="DD/MM/YYYY"
          suffixIcon={<Calendar />}
        />,
      ],
      title1014: '1014612195',
      title1025: '379721 - John Carlos',
      title1036: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1047: '23-03-2022',
      title1058: 'Make & Pack',
      status109: [
        <TagStatus8Row2Column91>
          <Warning2>Priorizar</Warning2>
        </TagStatus8Row2Column91>,
      ],
    },
    {
      key: '2',
      checkbox10: [
        <Checkbox6Row3Column01>
          <CheckboxInactiveDefault4 />
        </Checkbox6Row3Column01>,
      ],
      title1: [
        <Content24Row3Column11>
          <ButtonPriority3 type="text" icon={<FlagFilled />} size="small" />
          <DragHandler2 type="text" icon={<MenuOutlined />} size="small" />
        </Content24Row3Column11>,
      ],
      title992: [<InputPrioridade2 placeholder="1" />],
      title1003: [
        <GenericInputDate
          placeholder="Select time"
          format="DD/MM/YYYY"
          suffixIcon={<Calendar />}
        />,
      ],
      title1014: '1014612193',
      title1025: '179719 - João da Silva',
      title1036: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1047: '23-03-2022',
      title1058: 'Make & Pack',
      status109: [
        <TagStatus9Row3Column91>
          <Error3>Produção Atrasada</Error3>
        </TagStatus9Row3Column91>,
      ],
    },
    {
      key: '3',
      checkbox10: [
        <Checkbox7Row4Column01>
          <CheckboxInactiveDefault5 />
        </Checkbox7Row4Column01>,
      ],
      title1: [
        <Content25Row4Column11>
          <ButtonPriority4 type="text" icon={<FlagOutlined />} size="small" />
          <DragHandler3 type="text" icon={<MenuOutlined />} size="small" />
        </Content25Row4Column11>,
      ],
      title992: [<InputPrioridade3 placeholder="2" />],
      title1003: [
        <GenericInputDate
          placeholder="Select time"
          format="DD/MM/YYYY"
          suffixIcon={<Calendar />}
        />,
      ],
      title1014: '1014612194',
      title1025: '773720 - Mario Barbosa',
      title1036: '91330712 242259A: PRETO 2 FR 395665:FK22',
      title1047: '23-03-2022',
      title1058: 'Make & Pack',
      status109: [
        <TagStatus10Row4Column91>
          <Success2>Priorizada</Success2>
        </TagStatus10Row4Column91>,
      ],
    },
  ];

  return (
    <FrameComponentpriorizacaodeor>
      <PageHeader3>
        <Header6>
          <TextComponentpriorizao>
            Priorização de Ordens de Produção
          </TextComponentpriorizao>
          <Actions2>
            <ButtonPriority danger type="default" icon={<FlagOutlined />}>
              Definir como Prioridade
            </ButtonPriority>
            <ButtonDate type="default" icon={<CalendarOutlined />}>
              Definir Data
            </ButtonDate>
            <ButtonSave type="primary" icon={<SaveOutlined />} />
          </Actions2>
        </Header6>
      </PageHeader3>
      <Body8>
        <FrameComponentpriorizacaodeor1
          dataSource={dataSourceFrameComponentpriorizacaodeor1}
        >
          <ColumnFrameComponentpriorizacaodeor1
            title=""
            dataIndex="checkbox10"
            key="checkbox10"
            align="center"
            width="48px"
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Title"
            dataIndex="title1"
            key="title1"
            align="left"
            width="96px"
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Prioridade"
            dataIndex="title992"
            key="title992"
            align="left"
            width="97px"
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Data Planejada PCP"
            dataIndex="title1003"
            key="title1003"
            align="left"
            width="157px"
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="OP"
            dataIndex="title1014"
            key="title1014"
            align="left"
            filters={[
              { text: '1014612196', value: '1014612196' },
              { text: '1014612195', value: '1014612195' },
              { text: '1014612193', value: '1014612193' },
              { text: '1014612194', value: '1014612194' },
            ]}
            width="111px"
            onFilter={(value, record: any) =>
              record.title1014.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Cliente"
            dataIndex="title1025"
            key="title1025"
            align="left"
            filters={[
              {
                text: '879722 - Flávio Augusto',
                value: '879722 - Flávio Augusto',
              },
              { text: '379721 - John Carlos', value: '379721 - John Carlos' },
              {
                text: '179719 - João da Silva',
                value: '179719 - João da Silva',
              },
              {
                text: '773720 - Mario Barbosa',
                value: '773720 - Mario Barbosa',
              },
            ]}
            width="336px"
            onFilter={(value, record: any) =>
              record.title1025.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Produto"
            dataIndex="title1036"
            key="title1036"
            align="left"
            filters={[
              {
                text: '91330712 242259A: PRETO 2 FR 395665:FK22',
                value: '91330712 242259A: PRETO 2 FR 395665:FK22',
              },
            ]}
            width="336px"
            onFilter={(value, record: any) =>
              record.title1036.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Data Sugerida SAP"
            dataIndex="title1047"
            key="title1047"
            align="left"
            filters={[{ text: '23-03-2022', value: '23-03-2022' }]}
            width="171px"
            onFilter={(value, record: any) =>
              record.title1047.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Tipo"
            dataIndex="title1058"
            key="title1058"
            align="left"
            filters={[{ text: 'Make & Pack', value: 'Make & Pack' }]}
            width="113px"
            onFilter={(value, record: any) =>
              record.title1058.indexOf(value) === 0
            }
          />
          <ColumnFrameComponentpriorizacaodeor1
            title="Status"
            dataIndex="status109"
            key="status109"
            align="left"
            width="151px"
          />
        </FrameComponentpriorizacaodeor1>
      </Body8>
    </FrameComponentpriorizacaodeor>
  );
};

export default PriorizacaodeOrdensdeProducaoPage;
