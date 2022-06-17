import React from 'react';

import {CloseOutlined} from '@ant-design/icons' 
import { Typography } from 'antd';


import {
AprovarAmostraModal,
Header21,
Title178,
AprovarAmostra,
ButtonClose1,
Body35,
InputFormItem6,
InputBasic6,
Footer3,
ButtonBack1,
ButtonApply,
} from './styles';

const AprovarAmostraModalPage = () => {









return (
        <AprovarAmostraModal    >
  <Header21    >
    <Title178    >
      <AprovarAmostra >
        Aprovar Amostra
      </AprovarAmostra>
    </Title178>
    <ButtonClose1  
      type='text'
      icon={<CloseOutlined/>}
      >
    </ButtonClose1>
  </Header21>
  <Body35    >
    <InputFormItem6
    label={<Typography.Text ellipsis>Inserir laudo</Typography.Text>}
    name='inserirLaudo'
    >
      <InputBasic6
        placeholder='The plugin cannot get any placeholder'
      />
    </InputFormItem6>
  </Body35>
  <Footer3    >
    <ButtonBack1  
      type='default'
      >
        Voltar
    </ButtonBack1>
    <ButtonApply  
      type='primary'
      >
        Aplicar
    </ButtonApply>
  </Footer3>
</AprovarAmostraModal>

    )

}

export default AprovarAmostraModalPage
import React from 'react';

import {CloseOutlined} from '@ant-design/icons' 
import { Typography } from 'antd';


import {
AprovarAmostraModal1,
Header26,
Title183,
Aprovaranalise,
ButtonClose9,
Body40,
Row042,
InputFormItem24,
InputBasic24,
Footer8,
ButtonBack7,
ButtonApply5,
} from './styles';

const AprovarAmostraModalPage = () => {









return (
        <AprovarAmostraModal1    >
  <Header26    >
    <Title183    >
      <Aprovaranalise >
        Aprovar análise
      </Aprovaranalise>
    </Title183>
    <ButtonClose9  
      type='text'
      icon={<CloseOutlined/>}
      >
    </ButtonClose9>
  </Header26>
  <Body40    >
    <Row042    >
      <InputFormItem24
      label={<Typography.Text ellipsis>Resultado</Typography.Text>}
      name='resultado'
      >
        <InputBasic24
        placeholder='The plugin cannot get any placeholder'
        />
      </InputFormItem24>
    </Row042>
  </Body40>
  <Footer8    >
    <ButtonBack7  
      type='default'
      >
        Voltar
    </ButtonBack7>
    <ButtonApply5  
      type='primary'
      >
        Aplicar
    </ButtonApply5>
  </Footer8>
</AprovarAmostraModal1>

    )

}

export default AprovarAmostraModalPage
