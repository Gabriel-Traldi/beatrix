import React from 'react';

import {CloseOutlined} from '@ant-design/icons' 
import { Typography } from 'antd';
import {CheckOutlined} from '@ant-design/icons' 


import {
FinalizarPreCorkModal,
Header27,
Title184,
Finalizar,
OP10146121931,
ButtonClose2,
Body41,
Row014,
InputFormItem7,
InputBasic7,
Row25,
InputFormItem8,
InputBasic8,
Row34,
InputFormItem9,
InputBasic9,
Footer9,
ButtonBack2,
ButtonApply1,
} from './styles';

const FinalizarPreCorkModalPage = () => {









return (
        <FinalizarPreCorkModal    >
  <Header27    >
    <Title184    >
      <Finalizar >
        Finalizar
      </Finalizar>
      <OP10146121931 >
        OP #1014612193
      </OP10146121931>
    </Title184>
    <ButtonClose2  
      type='text'
      icon={<CloseOutlined/>}
      >
    </ButtonClose2>
  </Header27>
  <Body41    >
    <Row014    >
      <InputFormItem7
      label={<Typography.Text ellipsis>Destino</Typography.Text>}
      name='destino'
      >
        <InputBasic7
        placeholder='The plugin cannot get any placeholder'
        />
      </InputFormItem7>
    </Row014>
    <Row25    >
      <InputFormItem8
      label={<Typography.Text ellipsis>Motivo</Typography.Text>}
      name='motivo'
      >
        <InputBasic8
        placeholder='The plugin cannot get any placeholder'
        />
      </InputFormItem8>
    </Row25>
    <Row34    >
      <InputFormItem9
      label={<Typography.Text ellipsis>Justificativa</Typography.Text>}
      name='justificativa'
      >
        <InputBasic9
        placeholder='The plugin cannot get any placeholder'
        />
      </InputFormItem9>
    </Row34>
  </Body41>
  <Footer9    >
    <ButtonBack2  
      type='default'
      >
        Voltar
    </ButtonBack2>
    <ButtonApply1  
      type='primary'
      icon={<CheckOutlined/>}
      >
        Finalizar
    </ButtonApply1>
  </Footer9>
</FinalizarPreCorkModal>

    )

}

export default FinalizarPreCorkModalPage
