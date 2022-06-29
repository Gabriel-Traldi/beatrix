import React from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
  FinalizarAnaliseModal,
  Header24,
  Title181,
  Finalizaranalise,
  ButtonClose4,
  Body38,
  Row013,
  TextComponentqual,
  Footer6,
  ButtonReproval1,
  ButtonApproval,
} from './styles';

const FinalizarAnaliseModalPage = () => {
  const navigate = useNavigate();

  const navigateToReprovarAmostraModal = () => {
    navigate('/landing-page/reprovar-amostra-modal');
  };
  const navigateToAprovarAmostraModal = () => {
    navigate('/landing-page/aprovar-amostra-modal');
  };

  return (
    <FinalizarAnaliseModal>
      <Header24>
        <Title181>
          <Finalizaranalise>Finalizar análise</Finalizaranalise>
        </Title181>
        <ButtonClose4 type="text" icon={<CloseOutlined />} />
      </Header24>
      <Body38>
        <Row013>
          <TextComponentqual>
            Qual foi o resultado da análise realizada?
          </TextComponentqual>
        </Row013>
      </Body38>
      <Footer6>
        <ButtonReproval1
          onClick={navigateToReprovarAmostraModal}
          danger
          type="default"
        >
          Reprovar
        </ButtonReproval1>
        <ButtonApproval onClick={navigateToAprovarAmostraModal} type="default">
          Aprovar
        </ButtonApproval>
      </Footer6>
    </FinalizarAnaliseModal>
  );
};

export default FinalizarAnaliseModalPage;
