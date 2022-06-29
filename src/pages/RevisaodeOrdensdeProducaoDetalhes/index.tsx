import React from 'react';

import {
  ArrowLeftOutlined,
  CheckOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import GenericCodeButton from '../../components/Button';

import {
  FrameComponentrevisaodeordens1,
  PageHeader2,
  Header4,
  ButtonBack13,
  Title95,
  OrdemdeProducao2,
  Text101461121932,
  Buttons2,
  ButtonApproval4,
  Body4,
  Card01,
  Title96,
  Geral4,
  Body5,
  Row1,
  Field,
  Produto2,
  TextComponent913307122,
  Row2,
  Field1,
  OrdemdeFabricacao2,
  Text3SCUQB00E72,
  Row3,
  Field2,
  Quantidade2,
  Text1000Kg2,
  Field3,
  QuantidadePedidaCliente2,
  Text500Kg2,
  DividerHorizontal,
  Line,
  Row4,
  Field4,
  PedidodoCliente2,
  Text176880382,
  Field5,
  NomedoCliente2,
  Text179719KLABINSA2,
  Row5,
  Field6,
  DatadeColocacaodoPedido2,
  Text07022022114017BRT2,
  Field7,
  DatadeConfirmacao2,
  Text310120222,
  Field8,
  DatadeEnvioSolicitada2,
  Text110220222,
  Field9,
  DataFinaldaProducao2,
  Text140220222,
  Card02,
  Header5,
  Title97,
  Materiais2,
  Buttons3,
  ButtonEdit,
  Body6,
  Content14Row4Column11,
  Content15Row4Column21,
  Content16Row4Column51,
  ColumnMateriaisTable,
  MateriaisTable,
  Card021,
  Title98,
  Processo2,
  Body7,
  InstanceComponentstepsgroupnavig,
  InstanceComponentstepsitemnaviga,
  Wrapper1,
  StepsItemProgressIcon,
  Text22,
  Inprogress2,
  VectorComponentnavigationsteps,
  StepsItemArrow,
  Rectangle1,
  VectorComponentnavigationsteps1,
  InstanceComponentstepsitemnaviga1,
  Wrapper2,
  StepsItemProgressIcon1,
  Text38,
  Waiting8,
  VectorComponentnavigationsteps2,
  StepsItemArrow1,
  Rectangle11,
  VectorComponentnavigationsteps3,
  InstanceComponentstepsitemnaviga2,
  Wrapper3,
  StepsItemProgressIcon2,
  Text39,
  Waiting9,
  VectorComponentnavigationsteps4,
  StepsItemArrow2,
  Rectangle12,
  VectorComponentnavigationsteps5,
  InstanceComponentstepsitemnaviga3,
  Wrapper4,
  StepsItemProgressIcon3,
  Text310,
  Waiting10,
  VectorComponentnavigationsteps6,
  StepsItemArrow3,
  Rectangle13,
  VectorComponentnavigationsteps7,
  InstanceComponentstepsitemnaviga4,
  Wrapper5,
  StepsItemProgressIcon4,
  Text311,
  Waiting11,
  VectorComponentnavigationsteps8,
  ActionsRow,
  ButtonApproval5,
} from './styles';

const RevisaodeOrdensdeProducaoDetalhesPage = () => {
  const navigate = useNavigate();
  const dataSourceMateriaisTable = [
    {
      key: '0',
      codigo30: '30000806',
      por31: '34.400%',
      descricao32: '340-81:TAP WATER: PIPELINE',
      quantidadePedida33: '50 Kg',
      quantidadeReal34: '-',
      adicoesMotivo35: '-',
    },
    {
      key: '1',
      codigo30: '30226125',
      por31: '1.800%',
      descricao32: '531-0130:CERIDUST 3715:BAG2',
      quantidadePedida33: '2,6 Kg',
      quantidadeReal34: '-',
      adicoesMotivo35: '-',
    },
    {
      key: '2',
      codigo30: '30537820',
      por31: '3.800%',
      descricao32: '425-0401:MONOETANOLAMINA',
      quantidadePedida33: '5,5 Kg',
      quantidadeReal34: '-',
      adicoesMotivo35: '-',
    },
    {
      key: '3',
      codigo30: 'Total',
      por31: [<Content14Row4Column11 />],
      descricao32: [<Content15Row4Column21 />],
      quantidadePedida33: '58,1 Kg',
      quantidadeReal34: '0 Kg',
      adicoesMotivo35: [<Content16Row4Column51 />],
    },
  ];

  const navigateToAlertaMateriaisModal = () => {
    navigate('/landing-page/alerta-materiais-modal');
  };
  const navigateToAlterarMateriaisModal = () => {
    navigate('/landing-page/alterar-materiais-modal');
  };

  return (
    <FrameComponentrevisaodeordens1>
      <PageHeader2>
        <Header4>
          <ButtonBack13 type="text" icon={<ArrowLeftOutlined />} />
          <Title95>
            <OrdemdeProducao2>Ordem de Produção</OrdemdeProducao2>
            <Text101461121932>#10146112193</Text101461121932>
          </Title95>
          <Buttons2>
            <GenericCodeButton type="link">
              Esqueci minha senha
            </GenericCodeButton>
            <ButtonApproval4
              onClick={navigateToAlertaMateriaisModal}
              type="default"
              icon={<CheckOutlined />}
            >
              Aprovar OP
            </ButtonApproval4>
          </Buttons2>
        </Header4>
      </PageHeader2>
      <Body4>
        <Card01>
          <Title96>
            <Geral4>Geral</Geral4>
          </Title96>
          <Body5>
            <Row1>
              <Field>
                <Produto2>Produto:</Produto2>
                <TextComponent913307122>
                  91330712 242259A:PRETO 2 FR 395665:FK22
                </TextComponent913307122>
              </Field>
            </Row1>
            <Row2>
              <Field1>
                <OrdemdeFabricacao2>Ordem de Fabricação:</OrdemdeFabricacao2>
                <Text3SCUQB00E72>3SCUQB00E7</Text3SCUQB00E72>
              </Field1>
            </Row2>
            <Row3>
              <Field2>
                <Quantidade2>Quantidade:</Quantidade2>
                <Text1000Kg2>1000 Kg</Text1000Kg2>
              </Field2>
              <Field3>
                <QuantidadePedidaCliente2>
                  Quantidade Pedida Cliente:
                </QuantidadePedidaCliente2>
                <Text500Kg2>500 Kg</Text500Kg2>
              </Field3>
            </Row3>
            <DividerHorizontal>
              <Line />
            </DividerHorizontal>
            <Row4>
              <Field4>
                <PedidodoCliente2>Pedido do Cliente:</PedidodoCliente2>
                <Text176880382>17688038</Text176880382>
              </Field4>
              <Field5>
                <NomedoCliente2>Nome do Cliente:</NomedoCliente2>
                <Text179719KLABINSA2>179719 - KLABIN S.A.</Text179719KLABINSA2>
              </Field5>
            </Row4>
            <Row5>
              <Field6>
                <DatadeColocacaodoPedido2>
                  Data de Colocação do Pedido:
                </DatadeColocacaodoPedido2>
                <Text07022022114017BRT2>
                  07/02/2022 - 11:40:17 (BRT)
                </Text07022022114017BRT2>
              </Field6>
              <Field7>
                <DatadeConfirmacao2>Data de Confirmação:</DatadeConfirmacao2>
                <Text310120222>31/01/2022</Text310120222>
              </Field7>
              <Field8>
                <DatadeEnvioSolicitada2>
                  Data de Envio Solicitada:
                </DatadeEnvioSolicitada2>
                <Text110220222>11/02/2022</Text110220222>
              </Field8>
              <Field9>
                <DataFinaldaProducao2>
                  Data Final da Produção
                </DataFinaldaProducao2>
                <Text140220222>14/02/2022</Text140220222>
              </Field9>
            </Row5>
          </Body5>
        </Card01>
        <Card02>
          <Header5>
            <Title97>
              <Materiais2>Materiais</Materiais2>
            </Title97>
            <Buttons3>
              <ButtonEdit
                onClick={navigateToAlterarMateriaisModal}
                type="default"
                icon={<EditOutlined />}
              >
                Alterar Materiais
              </ButtonEdit>
            </Buttons3>
          </Header5>
          <Body6>
            <MateriaisTable dataSource={dataSourceMateriaisTable}>
              <ColumnMateriaisTable
                title="Código"
                dataIndex="codigo30"
                key="codigo30"
                align="left"
                filters={[
                  { text: '30000806', value: '30000806' },
                  { text: '30226125', value: '30226125' },
                  { text: '30537820', value: '30537820' },
                  { text: 'Total', value: 'Total' },
                ]}
                width="97px"
                onFilter={(value, record: any) =>
                  record.codigo30.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable
                title="Por (%)"
                dataIndex="por31"
                key="por31"
                align="left"
                width="98px"
              />
              <ColumnMateriaisTable
                title="Descrição"
                dataIndex="descricao32"
                key="descricao32"
                align="left"
                width="531.5px"
              />
              <ColumnMateriaisTable
                title="Quantidade Pedida"
                dataIndex="quantidadePedida33"
                key="quantidadePedida33"
                align="left"
                filters={[
                  { text: '50 Kg', value: '50 Kg' },
                  { text: '2,6 Kg', value: '2,6 Kg' },
                  { text: '5,5 Kg', value: '5,5 Kg' },
                  { text: '58,1 Kg', value: '58,1 Kg' },
                ]}
                width="171px"
                onFilter={(value, record: any) =>
                  record.quantidadePedida33.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable
                title="Quantidade Real"
                dataIndex="quantidadeReal34"
                key="quantidadeReal34"
                align="left"
                filters={[
                  { text: '-', value: '-' },
                  { text: '0 Kg', value: '0 Kg' },
                ]}
                width="155px"
                onFilter={(value, record: any) =>
                  record.quantidadeReal34.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable
                title="Adições / Motivo"
                dataIndex="adicoesMotivo35"
                key="adicoesMotivo35"
                align="left"
                width="531.5px"
              />
            </MateriaisTable>
          </Body6>
        </Card02>
        <Card021>
          <Title98>
            <Processo2>Processo</Processo2>
          </Title98>
          <Body7>
            <InstanceComponentstepsgroupnavig>
              <InstanceComponentstepsitemnaviga>
                <Wrapper1>
                  <StepsItemProgressIcon>
                    <Text22>1</Text22>
                  </StepsItemProgressIcon>
                  <div>
                    <Inprogress2>Pesar</Inprogress2>
                  </div>
                </Wrapper1>
                <VectorComponentnavigationsteps />
              </InstanceComponentstepsitemnaviga>
              <StepsItemArrow>
                <Rectangle1 />
                <VectorComponentnavigationsteps1 />
              </StepsItemArrow>
              <InstanceComponentstepsitemnaviga1>
                <Wrapper2>
                  <StepsItemProgressIcon1>
                    <Text38>2</Text38>
                  </StepsItemProgressIcon1>
                  <div>
                    <Waiting8>Homogenizar</Waiting8>
                  </div>
                </Wrapper2>
                <VectorComponentnavigationsteps2 />
              </InstanceComponentstepsitemnaviga1>
              <StepsItemArrow1>
                <Rectangle11 />
                <VectorComponentnavigationsteps3 />
              </StepsItemArrow1>
              <InstanceComponentstepsitemnaviga2>
                <Wrapper3>
                  <StepsItemProgressIcon2>
                    <Text39>3</Text39>
                  </StepsItemProgressIcon2>
                  <div>
                    <Waiting9>Controle de Qualidade</Waiting9>
                  </div>
                </Wrapper3>
                <VectorComponentnavigationsteps4 />
              </InstanceComponentstepsitemnaviga2>
              <StepsItemArrow2>
                <Rectangle12 />
                <VectorComponentnavigationsteps5 />
              </StepsItemArrow2>
              <InstanceComponentstepsitemnaviga3>
                <Wrapper4>
                  <StepsItemProgressIcon3>
                    <Text310>4</Text310>
                  </StepsItemProgressIcon3>
                  <div>
                    <Waiting10>Envasar</Waiting10>
                  </div>
                </Wrapper4>
                <VectorComponentnavigationsteps6 />
              </InstanceComponentstepsitemnaviga3>
              <StepsItemArrow3>
                <Rectangle13 />
                <VectorComponentnavigationsteps7 />
              </StepsItemArrow3>
              <InstanceComponentstepsitemnaviga4>
                <Wrapper5>
                  <StepsItemProgressIcon4>
                    <Text311>5</Text311>
                  </StepsItemProgressIcon4>
                  <div>
                    <Waiting11>Rotular</Waiting11>
                  </div>
                </Wrapper5>
                <VectorComponentnavigationsteps8 />
              </InstanceComponentstepsitemnaviga4>
            </InstanceComponentstepsgroupnavig>
          </Body7>
        </Card021>
        <ActionsRow>
          <GenericCodeButton type="link">Esqueci minha senha</GenericCodeButton>
          <ButtonApproval5
            onClick={navigateToAlertaMateriaisModal}
            type="default"
            icon={<CheckOutlined />}
          >
            Aprovar OP
          </ButtonApproval5>
        </ActionsRow>
      </Body4>
    </FrameComponentrevisaodeordens1>
  );
};

export default RevisaodeOrdensdeProducaoDetalhesPage;
