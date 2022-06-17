import React from 'react';

import {MenuOutlined} from '@ant-design/icons' 
import {BellOutlined} from '@ant-design/icons' 


import {
LayoutHeader,
Header,
Wrapper,
ButtonsButton4,
InkControlSymbol,
Actions,
ButtonsButton5,
Notifications,
Frame43,
Avatar,
Rectangle3,
IconOutlinedUser,
InstanceComponentdropdowntrigger,
Dropdown,
VectorComponenticonoutlineddir,
} from './styles';

const LayoutHeaderPage = () => {









return (
        <LayoutHeader    >
  <Header    >
    <Wrapper    >
      <ButtonsButton4  
        type='text'
        icon={<MenuOutlined/>}
        >
      </ButtonsButton4>
      <InkControlSymbol    >
      </InkControlSymbol>
    </Wrapper>
    <Actions    >
      <ButtonsButton5  
        type='text'
        >
          PT
      </ButtonsButton5>
      <Notifications  
        type='text'
        icon={<BellOutlined/>}
        >
      </Notifications>
      <Frame43    >
        <Avatar    >
          <Rectangle3    >
          </Rectangle3>
          <IconOutlinedUser    >
          </IconOutlinedUser>
        </Avatar>
        <InstanceComponentdropdowntrigger    >
          <Dropdown >
            Nome do Usuário
          </Dropdown>
          <VectorComponenticonoutlineddir    >
          </VectorComponenticonoutlineddir>
        </InstanceComponentdropdowntrigger>
      </Frame43>
    </Actions>
  </Header>
</LayoutHeader>

    )

}

export default LayoutHeaderPage
