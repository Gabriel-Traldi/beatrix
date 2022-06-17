import React from 'react';

import {
  ArrowLeftOutlined,
  CloseOutlined,
  CheckOutlined,
  CaretRightFilled,
  PauseOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
  FrameComponentanaliseeaprovac2,
  PageHeader13,
  Header18,
  ButtonBack14,
  Title165,
  OrdemdeProducao3,
  Text101461121933,
  Buttons4,
  ButtonReproval7,
  ButtonApproval6,
  Body30,
  Card015,
  Title166,
  Geral5,
  Body31,
  Row15,
  Field30,
  Produto3,
  TextComponent913307123,
  Row24,
  Field31,
  OrdemdeFabricacao3,
  Text3SCUQB00E73,
  Row33,
  Field32,
  Quantidade3,
  Text1000Kg3,
  Field33,
  QuantidadePedidaCliente3,
  Text500Kg3,
  DividerHorizontal3,
  Line3,
  Row43,
  Field34,
  PedidodoCliente3,
  Text176880383,
  Field35,
  NomedoCliente3,
  Text179719KLABINSA3,
  Row53,
  Field36,
  DatadeColocacaodoPedido3,
  Text07022022114017BRT3,
  Field37,
  DatadeConfirmacao3,
  Text310120223,
  Field38,
  DatadeEnvioSolicitada3,
  Text110220223,
  Field39,
  DataFinaldaProducao3,
  Text140220223,
  Card028,
  Header19,
  Title167,
  Materiais3,
  Body32,
  Content50Row4Column11,
  Content51Row4Column21,
  Content52Row4Column51,
  ColumnMateriaisTable3,
  MateriaisTable3,
  Card03,
  Title168,
  Processo3,
  Body33,
  InstanceComponentstepsgroupnavig3,
  InstanceComponentstepsitemnaviga15,
  Wrapper16,
  StepsItemProgressIcon15,
  IconOutlinedCheck,
  Finished,
  VectorComponentnavigationsteps27,
  StepsItemArrow12,
  Rectangle112,
  VectorComponentnavigationsteps28,
  InstanceComponentstepsitemnaviga16,
  Wrapper17,
  StepsItemProgressIcon16,
  IconOutlinedCheck1,
  Finished1,
  VectorComponentnavigationsteps29,
  StepsItemArrow13,
  Rectangle113,
  VectorComponentnavigationsteps30,
  InstanceComponentstepsitemnaviga17,
  Wrapper18,
  StepsItemProgressIcon17,
  Text23,
  Inprogress3,
  VectorComponentnavigationsteps31,
  StepsItemArrow14,
  Rectangle114,
  VectorComponentnavigationsteps32,
  InstanceComponentstepsitemnaviga18,
  Wrapper19,
  StepsItemProgressIcon18,
  Text312,
  Waiting12,
  VectorComponentnavigationsteps33,
  StepsItemArrow15,
  Rectangle115,
  VectorComponentnavigationsteps34,
  InstanceComponentstepsitemnaviga19,
  Wrapper20,
  StepsItemProgressIcon19,
  Text313,
  Waiting13,
  VectorComponentnavigationsteps35,
  Card029,
  Header20,
  Title169,
  Requisitos,
  Body34,
  Content58Row1Column61,
  ButtonPlayPause,
  ButtonFinish2,
  TagStatus21Row1Column71,
  Default7,
  Content59Row2Column61,
  ButtonPlayPause1,
  ButtonFinish3,
  TagStatus22Row2Column71,
  Processing2,
  Content60Row3Column61,
  ButtonPlayPause2,
  ButtonFinish4,
  TagStatus23Row3Column71,
  Warning4,
  Content61Row4Column61,
  ButtonPlayPause3,
  ButtonFinish5,
  TagStatus24Row4Column71,
  Success7,
  Content62Row5Column61,
  ButtonPlayPause4,
  ButtonFinish6,
  TagStatus25Row5Column71,
  Error6,
  ColumnRequisitosTable,
  RequisitosTable,
  ActionsRow1,
  ButtonReproval8,
  ButtonApproval7,
} from './styles';

const AnaliseeAprovacaodeAmostraDetalhesPage = () => {
  const navigate = useNavigate();

  const navigateToReprovarAmostraModal = () => {
    navigate('/landing-page/reprovar-amostra-modal');
  };

  const navigateToAprovarAmostraModal = () => {
    navigate('/landing-page/aprovar-amostra-modal');
  };

  const navigateToFinalizarAnaliseModal = () => {
    navigate('/landing-page/finalizar-analise-modal');
  };

  const dataSourceMateriaisTable3 = [
    {
      key: '0',
      codigo50: '30000806',
      por51: '34.400%',
      descricao52: '340-81:TAP WATER: PIPELINE',
      quantidadePedida53: '50 Kg',
      quantidadeReal54: '50 Kg',
      adicoesMotivo55: '-',
    },
    {
      key: '1',
      codigo50: '30226125',
      por51: '1.800%',
      descricao52: '531-0130:CERIDUST 3715:BAG2',
      quantidadePedida53: '2,6 Kg',
      quantidadeReal54: '2,6 Kg',
      adicoesMotivo55: '-',
    },
    {
      key: '2',
      codigo50: '30537820',
      por51: '3.800%',
      descricao52: '425-0401:MONOETANOLAMINA',
      quantidadePedida53: '5,5 Kg',
      quantidadeReal54: '5,5 Kg',
      adicoesMotivo55: '-',
    },
    {
      key: '3',
      codigo50: 'Total',
      por51: [<Content50Row4Column11 />],
      descricao52: [<Content51Row4Column21 />],
      quantidadePedida53: '58,1 Kg',
      quantidadeReal54: '58,1 Kg',
      adicoesMotivo55: [<Content52Row4Column51 />],
    },
  ];
  const dataSourceRequisitosTable = [
    {
      key: '0',
      title1700: 'Viscosity Brooksfield - Neat H5 V20',
      title1711: 'Brooksfield LVT @ 25ºC (77ºF)',
      title1722: '-',
      title1733: '5000,0000',
      title1744: '7000,0000',
      title1755: '-',
      title1766: [
        <Content58Row1Column61>
          <ButtonPlayPause
            type="default"
            icon={<CaretRightFilled />}
            size="small"
          />
          <ButtonFinish2 type="default" icon={<CheckOutlined />} size="small" />
        </Content58Row1Column61>,
      ],
      title1777: [
        <TagStatus21Row1Column71>
          <Default7>Não iniciado</Default7>
        </TagStatus21Row1Column71>,
      ],
    },
    {
      key: '1',
      title1700: 'Tonalidade',
      title1711: 'Similar to Std',
      title1722: 'Pass',
      title1733: '-',
      title1744: '-',
      title1755: '-',
      title1766: [
        <Content59Row2Column61>
          <ButtonPlayPause1
            type="default"
            icon={<PauseOutlined />}
            size="small"
          />
          <ButtonFinish3
            onClick={navigateToFinalizarAnaliseModal}
            type="default"
            icon={<CheckOutlined />}
            size="small"
          />
        </Content59Row2Column61>,
      ],
      title1777: [
        <TagStatus22Row2Column71>
          <Processing2>Em andamento</Processing2>
        </TagStatus22Row2Column71>,
      ],
    },
    {
      key: '2',
      title1700: 'Tonalidade',
      title1711: 'Similar to Std',
      title1722: 'Pass',
      title1733: '-',
      title1744: '-',
      title1755: '-',
      title1766: [
        <Content60Row3Column61>
          <ButtonPlayPause2
            type="default"
            icon={<CaretRightFilled />}
            size="small"
          />
          <ButtonFinish4 type="default" icon={<CheckOutlined />} size="small" />
        </Content60Row3Column61>,
      ],
      title1777: [
        <TagStatus23Row3Column71>
          <Warning4>Pausado</Warning4>
        </TagStatus23Row3Column71>,
      ],
    },
    {
      key: '3',
      title1700: 'pH',
      title1711: 'pH Meter',
      title1722: '-',
      title1733: '9,5000',
      title1744: '10,5000',
      title1755: '10,2500',
      title1766: [
        <Content61Row4Column61>
          <ButtonPlayPause3
            type="default"
            icon={<CaretRightFilled />}
            size="small"
          />
          <ButtonFinish5 type="default" icon={<CheckOutlined />} size="small" />
        </Content61Row4Column61>,
      ],
      title1777: [
        <TagStatus24Row4Column71>
          <Success7>Aprovado</Success7>
        </TagStatus24Row4Column71>,
      ],
    },
    {
      key: '4',
      title1700: 'Crateras',
      title1711: 'Printed Flm',
      title1722: 'Pass',
      title1733: '-',
      title1744: '-',
      title1755: 'Nível elevado d...',
      title1766: [
        <Content62Row5Column61>
          <ButtonPlayPause4
            type="default"
            icon={<CaretRightFilled />}
            size="small"
          />
          <ButtonFinish6 type="default" icon={<CheckOutlined />} size="small" />
        </Content62Row5Column61>,
      ],
      title1777: [
        <TagStatus25Row5Column71>
          <Error6>Reprovado</Error6>
        </TagStatus25Row5Column71>,
      ],
    },
  ];

  return (
    <FrameComponentanaliseeaprovac2>
      <PageHeader13>
        <Header18>
          <ButtonBack14 type="text" icon={<ArrowLeftOutlined />} />
          <Title165>
            <OrdemdeProducao3>Ordem de Produção</OrdemdeProducao3>
            <Text101461121933>#10146112193</Text101461121933>
          </Title165>
          <Buttons4>
            <ButtonReproval7
              onClick={navigateToReprovarAmostraModal}
              danger
              type="default"
              icon={<CloseOutlined />}
            >
              Reprovar Amostra
            </ButtonReproval7>
            <ButtonApproval6
              onClick={navigateToAprovarAmostraModal}
              type="default"
              icon={<CheckOutlined />}
            >
              Aprovar Amostra
            </ButtonApproval6>
          </Buttons4>
        </Header18>
      </PageHeader13>
      <Body30>
        <Card015>
          <Title166>
            <Geral5>Geral</Geral5>
          </Title166>
          <Body31>
            <Row15>
              <Field30>
                <Produto3>Produto:</Produto3>
                <TextComponent913307123>
                  91330712 242259A:PRETO 2 FR 395665:FK22
                </TextComponent913307123>
              </Field30>
            </Row15>
            <Row24>
              <Field31>
                <OrdemdeFabricacao3>Ordem de Fabricação:</OrdemdeFabricacao3>
                <Text3SCUQB00E73>3SCUQB00E7</Text3SCUQB00E73>
              </Field31>
            </Row24>
            <Row33>
              <Field32>
                <Quantidade3>Quantidade:</Quantidade3>
                <Text1000Kg3>1000 Kg</Text1000Kg3>
              </Field32>
              <Field33>
                <QuantidadePedidaCliente3>
                  Quantidade Pedida Cliente:
                </QuantidadePedidaCliente3>
                <Text500Kg3>500 Kg</Text500Kg3>
              </Field33>
            </Row33>
            <DividerHorizontal3>
              <Line3 />
            </DividerHorizontal3>
            <Row43>
              <Field34>
                <PedidodoCliente3>Pedido do Cliente:</PedidodoCliente3>
                <Text176880383>17688038</Text176880383>
              </Field34>
              <Field35>
                <NomedoCliente3>Nome do Cliente:</NomedoCliente3>
                <Text179719KLABINSA3>179719 - KLABIN S.A.</Text179719KLABINSA3>
              </Field35>
            </Row43>
            <Row53>
              <Field36>
                <DatadeColocacaodoPedido3>
                  Data de Colocação do Pedido:
                </DatadeColocacaodoPedido3>
                <Text07022022114017BRT3>
                  07/02/2022 - 11:40:17 (BRT)
                </Text07022022114017BRT3>
              </Field36>
              <Field37>
                <DatadeConfirmacao3>Data de Confirmação:</DatadeConfirmacao3>
                <Text310120223>31/01/2022</Text310120223>
              </Field37>
              <Field38>
                <DatadeEnvioSolicitada3>
                  Data de Envio Solicitada:
                </DatadeEnvioSolicitada3>
                <Text110220223>11/02/2022</Text110220223>
              </Field38>
              <Field39>
                <DataFinaldaProducao3>
                  Data Final da Produção
                </DataFinaldaProducao3>
                <Text140220223>14/02/2022</Text140220223>
              </Field39>
            </Row53>
          </Body31>
        </Card015>
        <Card028>
          <Header19>
            <Title167>
              <Materiais3>Materiais</Materiais3>
            </Title167>
          </Header19>
          <Body32>
            <MateriaisTable3 dataSource={dataSourceMateriaisTable3}>
              <ColumnMateriaisTable3
                title="Código"
                dataIndex="codigo50"
                key="codigo50"
                align="left"
                filters={[
                  { text: '30000806', value: '30000806' },
                  { text: '30226125', value: '30226125' },
                  { text: '30537820', value: '30537820' },
                  { text: 'Total', value: 'Total' },
                ]}
                width="97px"
                onFilter={(value, record: any) =>
                  record.codigo50.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable3
                title="Por (%)"
                dataIndex="por51"
                key="por51"
                align="left"
                width="98px"
              />
              <ColumnMateriaisTable3
                title="Descrição"
                dataIndex="descricao52"
                key="descricao52"
                align="left"
                width="531.5px"
              />
              <ColumnMateriaisTable3
                title="Quantidade Pedida"
                dataIndex="quantidadePedida53"
                key="quantidadePedida53"
                align="left"
                filters={[
                  { text: '50 Kg', value: '50 Kg' },
                  { text: '2,6 Kg', value: '2,6 Kg' },
                  { text: '5,5 Kg', value: '5,5 Kg' },
                  { text: '58,1 Kg', value: '58,1 Kg' },
                ]}
                width="171px"
                onFilter={(value, record: any) =>
                  record.quantidadePedida53.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable3
                title="Quantidade Real"
                dataIndex="quantidadeReal54"
                key="quantidadeReal54"
                align="left"
                filters={[
                  { text: '50 Kg', value: '50 Kg' },
                  { text: '2,6 Kg', value: '2,6 Kg' },
                  { text: '5,5 Kg', value: '5,5 Kg' },
                  { text: '58,1 Kg', value: '58,1 Kg' },
                ]}
                width="155px"
                onFilter={(value, record: any) =>
                  record.quantidadeReal54.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable3
                title="Adições / Motivo"
                dataIndex="adicoesMotivo55"
                key="adicoesMotivo55"
                align="left"
                width="531.5px"
              />
            </MateriaisTable3>
          </Body32>
        </Card028>
        <Card03>
          <Title168>
            <Processo3>Processo</Processo3>
          </Title168>
          <Body33>
            <InstanceComponentstepsgroupnavig3>
              <InstanceComponentstepsitemnaviga15>
                <Wrapper16>
                  <StepsItemProgressIcon15>
                    <IconOutlinedCheck />
                  </StepsItemProgressIcon15>
                  <div>
                    <Finished>Pesar</Finished>
                  </div>
                </Wrapper16>
                <VectorComponentnavigationsteps27 />
              </InstanceComponentstepsitemnaviga15>
              <StepsItemArrow12>
                <Rectangle112 />
                <VectorComponentnavigationsteps28 />
              </StepsItemArrow12>
              <InstanceComponentstepsitemnaviga16>
                <Wrapper17>
                  <StepsItemProgressIcon16>
                    <IconOutlinedCheck1 />
                  </StepsItemProgressIcon16>
                  <div>
                    <Finished1>Homogenizar</Finished1>
                  </div>
                </Wrapper17>
                <VectorComponentnavigationsteps29 />
              </InstanceComponentstepsitemnaviga16>
              <StepsItemArrow13>
                <Rectangle113 />
                <VectorComponentnavigationsteps30 />
              </StepsItemArrow13>
              <InstanceComponentstepsitemnaviga17>
                <Wrapper18>
                  <StepsItemProgressIcon17>
                    <Text23>3</Text23>
                  </StepsItemProgressIcon17>
                  <div>
                    <Inprogress3>Controle de Qualidade</Inprogress3>
                  </div>
                </Wrapper18>
                <VectorComponentnavigationsteps31 />
              </InstanceComponentstepsitemnaviga17>
              <StepsItemArrow14>
                <Rectangle114 />
                <VectorComponentnavigationsteps32 />
              </StepsItemArrow14>
              <InstanceComponentstepsitemnaviga18>
                <Wrapper19>
                  <StepsItemProgressIcon18>
                    <Text312>4</Text312>
                  </StepsItemProgressIcon18>
                  <div>
                    <Waiting12>Envasar</Waiting12>
                  </div>
                </Wrapper19>
                <VectorComponentnavigationsteps33 />
              </InstanceComponentstepsitemnaviga18>
              <StepsItemArrow15>
                <Rectangle115 />
                <VectorComponentnavigationsteps34 />
              </StepsItemArrow15>
              <InstanceComponentstepsitemnaviga19>
                <Wrapper20>
                  <StepsItemProgressIcon19>
                    <Text313>5</Text313>
                  </StepsItemProgressIcon19>
                  <div>
                    <Waiting13>Rotular</Waiting13>
                  </div>
                </Wrapper20>
                <VectorComponentnavigationsteps35 />
              </InstanceComponentstepsitemnaviga19>
            </InstanceComponentstepsgroupnavig3>
          </Body33>
        </Card03>
        <Card029>
          <Header20>
            <Title169>
              <Requisitos>Requisitos</Requisitos>
            </Title169>
          </Header20>
          <Body34>
            <RequisitosTable dataSource={dataSourceRequisitosTable}>
              <ColumnRequisitosTable
                title="Característica"
                dataIndex="title1700"
                key="title1700"
                align="left"
                width="363.33349609375px"
              />
              <ColumnRequisitosTable
                title="Método"
                dataIndex="title1711"
                key="title1711"
                align="left"
                width="363.33349609375px"
              />
              <ColumnRequisitosTable
                title="Target"
                dataIndex="title1722"
                key="title1722"
                align="left"
                width="73px"
              />
              <ColumnRequisitosTable
                title="Mínimo"
                dataIndex="title1733"
                key="title1733"
                align="left"
                width="98px"
              />
              <ColumnRequisitosTable
                title="Máximo"
                dataIndex="title1744"
                key="title1744"
                align="left"
                width="98px"
              />
              <ColumnRequisitosTable
                title="Resultados"
                dataIndex="title1755"
                key="title1755"
                align="left"
                width="363.33349609375px"
              />
              <ColumnRequisitosTable
                title="Ações"
                dataIndex="title1766"
                key="title1766"
                align="left"
                width="96px"
              />
              <ColumnRequisitosTable
                title="Status"
                dataIndex="title1777"
                key="title1777"
                align="left"
                width="129px"
              />
            </RequisitosTable>
          </Body34>
        </Card029>
        <ActionsRow1>
          <ButtonReproval8
            onClick={navigateToReprovarAmostraModal}
            danger
            type="default"
            icon={<CloseOutlined />}
          >
            Reprovar Amostra
          </ButtonReproval8>
          <ButtonApproval7
            onClick={navigateToAprovarAmostraModal}
            type="default"
            icon={<CheckOutlined />}
          >
            Aprovar Amostra
          </ButtonApproval7>
        </ActionsRow1>
      </Body30>
    </FrameComponentanaliseeaprovac2>
  );
};

export default AnaliseeAprovacaodeAmostraDetalhesPage;
