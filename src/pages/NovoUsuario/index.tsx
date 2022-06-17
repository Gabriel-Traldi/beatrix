import React from 'react';

import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';

import { Typography } from 'antd';

import {
  NovoUsuario,
  PageHeader12,
  Header15,
  ButtonBack12,
  Title152,
  DetalhesdoUsuario,
  Actions8,
  ButtonSave4,
  Body25,
  Card014,
  Title153,
  Geral3,
  Body26,
  Row14,
  InputFormItem28,
  InputBasic30,
  InputFormItem29,
  InputBasic31,
  InputFormItem30,
  InputBasic32,
  Row23,
  InputFormItem31,
  InputBasic33,
  InputFormItem32,
  InputBasic34,
  InputFormItem33,
  InputBasic35,
  InputFormItem34,
  InputBasic36,
  Card027,
  Title154,
  VinculodeEquipamento,
  Body27,
  Checkbox6,
  Checkbox7,
  Checkbox8,
  Checkbox9,
  Checkbox10,
} from './styles';

const NovoUsuarioPage = () => {
  return (
    <NovoUsuario>
      <PageHeader12>
        <Header15>
          <ButtonBack12 type="text" icon={<ArrowLeftOutlined />} />
          <Title152>
            <DetalhesdoUsuario>Detalhes do Usuário</DetalhesdoUsuario>
          </Title152>
          <Actions8>
            <ButtonSave4 type="primary" icon={<SaveOutlined />} />
          </Actions8>
        </Header15>
      </PageHeader12>
      <Body25>
        <Card014>
          <Title153>
            <Geral3>Geral</Geral3>
          </Title153>
          <Body26>
            <Row14>
              <InputFormItem28
                label={<Typography.Text ellipsis>Nome</Typography.Text>}
                name="nome"
              >
                <InputBasic30 placeholder="Input placeholder" />
              </InputFormItem28>
              <InputFormItem29
                label={<Typography.Text ellipsis>Usuário</Typography.Text>}
                name="usuario"
              >
                <InputBasic31 placeholder="Input placeholder" />
              </InputFormItem29>
              <InputFormItem30
                label={<Typography.Text ellipsis>Planta</Typography.Text>}
                name="planta"
              >
                <InputBasic32 placeholder="The plugin cannot get any placeholder" />
              </InputFormItem30>
            </Row14>
            <Row23>
              <InputFormItem31
                label={<Typography.Text ellipsis>Área</Typography.Text>}
                name="area"
              >
                <InputBasic33 placeholder="The plugin cannot get any placeholder" />
              </InputFormItem31>
              <InputFormItem32
                label={<Typography.Text ellipsis>Cargo</Typography.Text>}
                name="cargo"
              >
                <InputBasic34 placeholder="The plugin cannot get any placeholder" />
              </InputFormItem32>
              <InputFormItem33
                label={<Typography.Text ellipsis>Permissões</Typography.Text>}
                name="permissoes"
              >
                <InputBasic35 placeholder="The plugin cannot get any placeholder" />
              </InputFormItem33>
              <InputFormItem34
                label={<Typography.Text ellipsis>Status</Typography.Text>}
                name="status"
              >
                <InputBasic36 placeholder="The plugin cannot get any placeholder" />
              </InputFormItem34>
            </Row23>
          </Body26>
        </Card014>
        <Card027>
          <Title154>
            <VinculodeEquipamento>Vínculo de Equipamento</VinculodeEquipamento>
          </Title154>
          <Body27>
            <Checkbox6>Equipamento 01</Checkbox6>
            <Checkbox7>Equipamento 02</Checkbox7>
            <Checkbox8>Equipamento 03</Checkbox8>
            <Checkbox9>Equipamento 04</Checkbox9>
            <Checkbox10>Equipamento 05</Checkbox10>
          </Body27>
        </Card027>
      </Body25>
    </NovoUsuario>
  );
};

export default NovoUsuarioPage;
