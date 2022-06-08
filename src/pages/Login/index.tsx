import React from 'react';

import { Typography } from 'antd';
import GenericInput from '../../components/Input' 
import GenericCodeButton from '../../components/Button' 


import {
Login,
Body,
SunChemicalLogoBlack,
ViceriForm,
InputFormItem,
InputFormItem1,
Actions,
ButtonsButton1,
} from './styles';

const LoginPage = () => {









return (
        <Login    >
  <Body    >
    <SunChemicalLogoBlack    >
    </SunChemicalLogoBlack>
    <ViceriForm  layout='vertical'  >
      <InputFormItem
      label={<Typography.Text ellipsis>Usuário</Typography.Text>}
      name='usuario'
      >
        <GenericInput
        placeholder='Input placeholder'
        />
      </InputFormItem>
      <InputFormItem1
      label={<Typography.Text ellipsis>Senha</Typography.Text>}
      name='senha'
      >
        <GenericInput
        placeholder='Input placeholder'
        />
      </InputFormItem1>
      <Actions    >
        <GenericCodeButton 
          type='link'
          >
            Esqueci minha senha
        </GenericCodeButton>
        <ButtonsButton1 
          type='primary'
          >
            Login
        </ButtonsButton1>
      </Actions>
    </ViceriForm>
  </Body>
</Login>

    )

}

export default LoginPage
