import React from 'react';

import GenericFormItem from '../../components/FormItem' 
import { Typography } from 'antd';
import GenericInputDate from '../../components/InputDate' 
import {Calendar} from '@ant-design/icons' 
import GenericCodeButton from '../../components/Button' 


import {
Login,
Body1,
SunChemicalLogoBlack,
ViceriForm,
Actions1,
ButtonsButton1,
} from './styles';

const LoginPage = () => {









return (
        <Login    >
  <Body1    >
    <SunChemicalLogoBlack    >
    </SunChemicalLogoBlack>
    <ViceriForm  layout='vertical'  >
      <GenericFormItem
      label={<Typography.Text ellipsis>Usuário</Typography.Text>}
      name='usuario'
      >
        <GenericInputDate
        placeholder='Select time'
        format='DD/MM/YYYY'
        suffixIcon={<Calendar />}
        />
      </GenericFormItem>
      <GenericFormItem
      label={<Typography.Text ellipsis>Usuário</Typography.Text>}
      name='usuario'
      >
        <GenericInputDate
        placeholder='Select time'
        format='DD/MM/YYYY'
        suffixIcon={<Calendar />}
        />
      </GenericFormItem>
      <Actions1    >
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
      </Actions1>
    </ViceriForm>
  </Body1>
</Login>

    )

}

export default LoginPage
