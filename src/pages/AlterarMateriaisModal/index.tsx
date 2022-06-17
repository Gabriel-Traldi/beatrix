import React from 'react';

import {
  CloseOutlined,
  PlusOutlined,
  DeleteOutlined,
  UndoOutlined,
} from '@ant-design/icons';

import { Typography } from 'antd';

import {
  AlterarMateriaisModal,
  Header16,
  Title155,
  AlterarMateriais,
  OP10146121932,
  ButtonClose11,
  Body28,
  Row01,
  ButtonNewComponent,
  SelectInput,
  SelectInputOption,
  InputBasic26,
  SelectInput4Row1Column41,
  Select19,
  IconOutlinedDown,
  Content45Row1Column51,
  ButtonDelete,
  Content46Row2Column51,
  ButtonUndo,
  Content47Row3Column51,
  ButtonDelete1,
  SelectInput5Row4Column21,
  Select13,
  IconOutlinedDown1,
  InputBasic39Row4Column31,
  Inputplaceholder6,
  SelectInput6Row4Column41,
  Select20,
  IconOutlinedDown2,
  Content48Row4Column51,
  ButtonDelete2,
  Content49Row5Column51,
  ColumnAlterarMateriaisTable,
  AlterarMateriaisTable,
  InputFormItem25,
  InputBasic27,
  Footer1,
  ButtonBack9,
  ButtonApply7,
} from './styles';

const AlterarMateriaisModalPage = () => {
  const dataSourceAlterarMateriaisTable = [
    {
      key: '0',
      title1560: '30000806',
      title1571: '34.400%',
      title1582: [
        <SelectInput allowClear placeholder="340-81:TAP WATER: PIPELINE">
          <SelectInputOption />
        </SelectInput>,
      ],
      quantidadeKg23: [<InputBasic26 placeholder="50" />],
      title1594: [
        <SelectInput4Row1Column41>
          <Select19>Selecione</Select19>
          <IconOutlinedDown />
        </SelectInput4Row1Column41>,
      ],
      title5: [
        <Content45Row1Column51>
          <ButtonDelete type="text" icon={<DeleteOutlined />} size="small" />
        </Content45Row1Column51>,
      ],
    },
    {
      key: '1',
      title1560: '30226125',
      title1571: '25.000%',
      title1582: '531-0130:CERIDUST 3715:BAG2',
      quantidadeKg23: '20 Kg',
      title1594: '-',
      title5: [
        <Content46Row2Column51>
          <ButtonUndo type="text" icon={<UndoOutlined />} size="small" />
        </Content46Row2Column51>,
      ],
    },
    {
      key: '2',
      title1560: '30537820',
      title1571: '25.000%',
      title1582: '425-0401:MONOETANOLAMINA',
      quantidadeKg23: '20 Kg',
      title1594: '-',
      title5: [
        <Content47Row3Column51>
          <ButtonDelete1 type="text" icon={<DeleteOutlined />} size="small" />
        </Content47Row3Column51>,
      ],
    },
    {
      key: '3',
      title1560: '-',
      title1571: '-',
      title1582: [
        <SelectInput5Row4Column21>
          <Select13>Selecione</Select13>
          <IconOutlinedDown1 />
        </SelectInput5Row4Column21>,
      ],
      quantidadeKg23: [
        <InputBasic39Row4Column31>
          <Inputplaceholder6>0</Inputplaceholder6>
        </InputBasic39Row4Column31>,
      ],
      title1594: [
        <SelectInput6Row4Column41>
          <Select20>Selecione</Select20>
          <IconOutlinedDown2 />
        </SelectInput6Row4Column41>,
      ],
      title5: [
        <Content48Row4Column51>
          <ButtonDelete2 type="text" icon={<DeleteOutlined />} size="small" />
        </Content48Row4Column51>,
      ],
    },
    {
      key: '4',
      title1560: 'Total',
      title1571: 'Text',
      title1582: [],
      quantidadeKg23: '0,0 Kg',
      title1594: [],
      title5: [<Content49Row5Column51 />],
    },
  ];

  return (
    <AlterarMateriaisModal>
      <Header16>
        <Title155>
          <AlterarMateriais>Alterar Materiais</AlterarMateriais>
          <OP10146121932>OP #1014612193</OP10146121932>
        </Title155>
        <ButtonClose11 type="text" icon={<CloseOutlined />} />
      </Header16>
      <Body28>
        <Row01>
          <ButtonNewComponent type="default" icon={<PlusOutlined />}>
            Novo Material
          </ButtonNewComponent>
        </Row01>
        <AlterarMateriaisTable dataSource={dataSourceAlterarMateriaisTable}>
          <ColumnAlterarMateriaisTable
            title="Código"
            dataIndex="title1560"
            key="title1560"
            align="left"
            width="95px"
          />
          <ColumnAlterarMateriaisTable
            title="Por (%)"
            dataIndex="title1571"
            key="title1571"
            align="left"
            width="86px"
          />
          <ColumnAlterarMateriaisTable
            title="Descrição"
            dataIndex="title1582"
            key="title1582"
            align="left"
            width="290.5px"
          />
          <ColumnAlterarMateriaisTable
            title="Quantidade (Kg)"
            dataIndex="quantidadeKg23"
            key="quantidadeKg23"
            align="left"
            width="134px"
          />
          <ColumnAlterarMateriaisTable
            title="Adições/Motivo"
            dataIndex="title1594"
            key="title1594"
            align="left"
            width="290.5px"
          />
          <ColumnAlterarMateriaisTable
            title="Ação"
            dataIndex="title5"
            key="title5"
            align="center"
            width="56px"
          />
        </AlterarMateriaisTable>
        <InputFormItem25
          label={<Typography.Text ellipsis>Justificativa</Typography.Text>}
          name="justificativa"
        >
          <InputBasic27 placeholder="The plugin cannot get any placeholder" />
        </InputFormItem25>
      </Body28>
      <Footer1>
        <ButtonBack9 type="default">Voltar</ButtonBack9>
        <ButtonApply7 type="primary">Aplicar</ButtonApply7>
      </Footer1>
    </AlterarMateriaisModal>
  );
};

export default AlterarMateriaisModalPage;
