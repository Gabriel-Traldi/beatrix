import React from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import {
  CadastrarDescarteModal,
  Header28,
  Title185,
  CadastrarDescarte,
  ButtonClose3,
  Body42,
  Row015,
  InputFormItem10,
  InputBasic10,
  InputFormItem11,
  InputBasic11,
  Row26,
  InputFormItem12,
  InputBasic12,
  InputFormItem13,
  InputBasic13,
  Row35,
  InputFormItem14,
  InputBasic14,
  InputFormItem15,
  InputBasic15,
  Footer10,
  ButtonBack3,
  ButtonApply2,
} from './styles';

const CadastrarDescarteModalPage = () => {
  return (
    <CadastrarDescarteModal>
      <Header28>
        <Title185>
          <CadastrarDescarte>Cadastrar Descarte</CadastrarDescarte>
        </Title185>
        <ButtonClose3 type="text" icon={<CloseOutlined />} />
      </Header28>
      <Body42>
        <Row015>
          <InputFormItem10
            label={<Typography.Text ellipsis>OP</Typography.Text>}
            name="oP"
          >
            <InputBasic10 placeholder="Selecione" />
          </InputFormItem10>
          <InputFormItem11
            label={
              <Typography.Text ellipsis>Recipiente de Descarte</Typography.Text>
            }
            name="recipienteDeDescarte"
          >
            <InputBasic11 placeholder="Selecione" />
          </InputFormItem11>
        </Row015>
        <Row26>
          <InputFormItem12
            label={<Typography.Text ellipsis>Material</Typography.Text>}
            name="material"
          >
            <InputBasic12 placeholder="The plugin cannot get any placeholder" />
          </InputFormItem12>
          <InputFormItem13
            label={<Typography.Text ellipsis>Lote</Typography.Text>}
            name="lote"
          >
            <InputBasic13 placeholder="Selecione" />
          </InputFormItem13>
        </Row26>
        <Row35>
          <InputFormItem14
            label={
              <Typography.Text ellipsis>
                Quantidade de Embalagens (unidades)
              </Typography.Text>
            }
            name="quantidadeDeEmbalagensUnidades"
          >
            <InputBasic14 placeholder="Selecione" />
          </InputFormItem14>
          <InputFormItem15
            label={<Typography.Text ellipsis>Peso (Kg)</Typography.Text>}
            name="pesoKg"
          >
            <InputBasic15 placeholder="Selecione" />
          </InputFormItem15>
        </Row35>
      </Body42>
      <Footer10>
        <ButtonBack3 type="default">Voltar</ButtonBack3>
        <ButtonApply2 type="primary">Confirmar</ButtonApply2>
      </Footer10>
    </CadastrarDescarteModal>
  );
};

export default CadastrarDescarteModalPage;
