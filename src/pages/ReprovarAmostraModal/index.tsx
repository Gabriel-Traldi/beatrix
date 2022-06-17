import React from 'react';

import { CloseOutlined , CloseOutlined , PlusOutlined , CloseOutlined } from '@ant-design/icons';
import { Typography , Typography , Typography } from 'antd';
import {useNavigate} from 'react-router-dom';


import {
ReprovarAmostraModal,
Header22,
Title179,
ReprovarAmostra,
ButtonClose5,
Body36,
InputFormItem16,
InputBasic16,
Footer4,
ButtonBack4,
ButtonContinue,
} from './styles';
import React from 'react';





import {
  ReprovarAmostraModal1,
  Header23,
  Title180,
  FormulacaodeRetoque,
  ButtonClose6,
  Body37,
  Row012,
  Etapa01,
  Row02,
  InputFormItem17,
  InputBasic17,
  InputFormItem18,
  InputBasic18,
  InputFormItem19,
  InputBasic19,
  Row03,
  ButtonClose7,
  Etapa02,
  Row04,
  InputFormItem20,
  InputBasic20,
  InputFormItem21,
  InputBasic21,
  Row05,
  ButtonAdd,
  Footer5,
  ButtonBack5,
  ButtonApply3,
} from './styles';
import React from 'react';




import {
  ReprovarAmostraModal2,
  Header25,
  Title182,
  Reprovaranalise,
  ButtonClose8,
  Body39,
  Row021,
  InputFormItem22,
  InputBasic22,
  Row041,
  InputFormItem23,
  InputBasic23,
  Footer7,
  ButtonBack6,
  ButtonApply4,
} from './styles';

const ReprovarAmostraModalPage = () => {
  let navigate = useNavigate();

  const navigateToReprovarAmostraModal = () => {
    navigate('/landing-page/reprovar-amostra-modal');
  };

  return (
    <ReprovarAmostraModal>
      <Header22>
        <Title179>
          <ReprovarAmostra>Reprovar Amostra</ReprovarAmostra>
        </Title179>
        <ButtonClose5 type="text" icon={<CloseOutlined />} />
      </Header22>
      <Body36>
        <InputFormItem16
          label={<Typography.Text ellipsis>Motivo</Typography.Text>}
          name="motivo"
        >
          <InputBasic16 placeholder="The plugin cannot get any placeholder" />
        </InputFormItem16>
      </Body36>
      <Footer4>
        <ButtonBack4 type="default">Voltar</ButtonBack4>
        <ButtonContinue
          onClick={navigateToReprovarAmostraModal}
          type="default"
          onClick={navigateToReprovarAmostraModal}
        >
          Continuar
        </ButtonContinue>
      </Footer4>
    </ReprovarAmostraModal>
  );
};

export default ReprovarAmostraModalPage;

const ReprovarAmostraModalPage = () => {
  return (
    <ReprovarAmostraModal1>
      <Header23>
        <Title180>
          <FormulacaodeRetoque>Formulação de Retoque</FormulacaodeRetoque>
        </Title180>
        <ButtonClose6 type="text" icon={<CloseOutlined />} />
      </Header23>
      <Body37>
        <Row012>
          <Etapa01>Etapa 01</Etapa01>
        </Row012>
        <Row02>
          <InputFormItem17
            label={<Typography.Text ellipsis>Ação</Typography.Text>}
            name="acao"
          >
            <InputBasic17 placeholder="The plugin cannot get any placeholder" />
          </InputFormItem17>
          <InputFormItem18
            label={<Typography.Text ellipsis>Material</Typography.Text>}
            name="material"
          >
            <InputBasic18 placeholder="The plugin cannot get any placeholder" />
          </InputFormItem18>
          <InputFormItem19
            label={<Typography.Text ellipsis>Quantidade (Kg)</Typography.Text>}
            name="quantidadeKg"
          >
            <InputBasic19 placeholder="Selecione" />
          </InputFormItem19>
        </Row02>
        <Row03>
          <ButtonClose7 type="text" icon={<CloseOutlined />} size="small" />
          <Etapa02>Etapa 02</Etapa02>
        </Row03>
        <Row04>
          <InputFormItem20
            label={<Typography.Text ellipsis>Ação</Typography.Text>}
            name="acao"
          >
            <InputBasic20 placeholder="The plugin cannot get any placeholder" />
          </InputFormItem20>
          <InputFormItem21
            label={<Typography.Text ellipsis>Duração (min.)</Typography.Text>}
            name="duracaoMin"
          >
            <InputBasic21 placeholder="Selecione" />
          </InputFormItem21>
        </Row04>
        <Row05>
          <ButtonAdd type="default" icon={<PlusOutlined />} size="small" />
        </Row05>
      </Body37>
      <Footer5>
        <ButtonBack5 type="default">Voltar</ButtonBack5>
        <ButtonApply3 type="primary">Confirmar</ButtonApply3>
      </Footer5>
    </ReprovarAmostraModal1>
  );
};

export default ReprovarAmostraModalPage;

const ReprovarAmostraModalPage = () => {
  return (
    <ReprovarAmostraModal2>
      <Header25>
        <Title182>
          <Reprovaranalise>Reprovar análise</Reprovaranalise>
        </Title182>
        <ButtonClose8 type="text" icon={<CloseOutlined />} />
      </Header25>
      <Body39>
        <Row021>
          <InputFormItem22
            label={<Typography.Text ellipsis>Motivo</Typography.Text>}
            name="motivo"
          >
            <InputBasic22 placeholder="The plugin cannot get any placeholder" />
          </InputFormItem22>
        </Row021>
        <Row041>
          <InputFormItem23
            label={<Typography.Text ellipsis>Resultado</Typography.Text>}
            name="resultado"
          >
            <InputBasic23 placeholder="The plugin cannot get any placeholder" />
          </InputFormItem23>
        </Row041>
      </Body39>
      <Footer7>
        <ButtonBack6 type="default">Voltar</ButtonBack6>
        <ButtonApply4 type="primary">Aplicar</ButtonApply4>
      </Footer7>
    </ReprovarAmostraModal2>
  );
};

export default ReprovarAmostraModalPage;
