import React from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import GenericCodeButton from '../../components/Button';

import {
  FrameComponentcancelarordemde,
  Header2,
  Title88,
  CancelarOP,
  OP1014612193,
  ButtonClose,
  Body2,
  InputFormItem4,
  InputBasic4,
  InputFormItem5,
  InputBasic5,
  Footer,
  ButtonBack,
} from './styles';

const CancelarOrdemdeProducaoModalPage = () => {
  return (
    <FrameComponentcancelarordemde>
      <Header2>
        <Title88>
          <CancelarOP>Cancelar OP</CancelarOP>
          <OP1014612193>OP #1014612193</OP1014612193>
        </Title88>
        <ButtonClose type="text" icon={<CloseOutlined />} />
      </Header2>
      <Body2>
        <InputFormItem4
          label={
            <Typography.Text ellipsis>Motivo de Cancelamento</Typography.Text>
          }
          name="motivoDeCancelamento"
        >
          <InputBasic4 placeholder="The plugin cannot get any placeholder" />
        </InputFormItem4>
        <InputFormItem5
          label={<Typography.Text ellipsis>Justificativa</Typography.Text>}
          name="justificativa"
        >
          <InputBasic5 placeholder="The plugin cannot get any placeholder" />
        </InputFormItem5>
      </Body2>
      <Footer>
        <ButtonBack type="default">Voltar</ButtonBack>
        <GenericCodeButton type="link">Esqueci minha senha</GenericCodeButton>
      </Footer>
    </FrameComponentcancelarordemde>
  );
};

export default CancelarOrdemdeProducaoModalPage;
