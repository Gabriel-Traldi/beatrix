import React from 'react';

import {ArrowLeftOutlined} from '@ant-design/icons' 
import {SaveOutlined} from '@ant-design/icons' 
import { Typography } from 'antd';


import {
NovoPerfildePermissao,
PageHeader8,
Header11,
ButtonBack11,
Title121,
PerfisdePermissao1,
NovoPerfil,
Actions5,
ButtonSave3,
Body16,
Card012,
Title122,
Geral2,
Body17,
Row12,
InputFormItem26,
InputBasic28,
InputFormItem27,
InputBasic29,
Card024,
Title123,
Permissoes,
Body18,
} from './styles';

const NovoPerfildePermissaoPage = () => {









return (
        <NovoPerfildePermissao    >
  <PageHeader8    >
    <Header11    >
      <ButtonBack11  
        type='text'
        icon={<ArrowLeftOutlined/>}
        >
      </ButtonBack11>
      <Title121    >
        <PerfisdePermissao1 >
          Perfis de Permissão
        </PerfisdePermissao1>
        <NovoPerfil >
          Novo Perfil
        </NovoPerfil>
      </Title121>
      <Actions5    >
        <ButtonSave3  
          type='primary'
          icon={<SaveOutlined/>}
          >
        </ButtonSave3>
      </Actions5>
    </Header11>
  </PageHeader8>
  <Body16    >
    <Card012    >
      <Title122    >
        <Geral2 >
          Geral
        </Geral2>
      </Title122>
      <Body17    >
        <Row12    >
          <InputFormItem26
          label={<Typography.Text ellipsis>Nome</Typography.Text>}
          name='nome'
          >
            <InputBasic28
        placeholder='Input placeholder'
            />
          </InputFormItem26>
          <InputFormItem27
          label={<Typography.Text ellipsis>Status</Typography.Text>}
          name='status'
          >
            <InputBasic29
        placeholder='The plugin cannot get any placeholder'
            />
          </InputFormItem27>
        </Row12>
      </Body17>
    </Card012>
    <Card024    >
      <Title123    >
        <Permissoes >
          Permissões
        </Permissoes>
      </Title123>
      <Body18    >
      </Body18>
    </Card024>
  </Body16>
</NovoPerfildePermissao>

    )

}

export default NovoPerfildePermissaoPage
