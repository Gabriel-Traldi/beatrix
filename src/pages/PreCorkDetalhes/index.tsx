import React from 'react';

import { ArrowLeftOutlined, CheckOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import {
  PreCorkDetalhes,
  PageHeader10,
  Header13,
  ButtonBack10,
  Frame44,
  OrdemdeProducao1,
  Text101461121931,
  Actions6,
  ButtonFinish,
  Body20,
  Card013,
  Title129,
  Geral1,
  Body21,
  Row13,
  Field20,
  Produto1,
  TextComponent913307121,
  Row22,
  Field21,
  OrdemdeFabricacao1,
  Text3SCUQB00E71,
  Row32,
  Field22,
  Quantidade1,
  Text1000Kg1,
  Field23,
  QuantidadePedidaCliente1,
  Text500Kg1,
  DividerHorizontal2,
  Line2,
  Row42,
  Field24,
  PedidodoCliente1,
  Text176880381,
  Field25,
  NomedoCliente1,
  Text179719KLABINSA1,
  Row52,
  Field26,
  DatadeColocacaodoPedido1,
  Text07022022114017BRT1,
  Field27,
  DatadeConfirmacao1,
  Text310120221,
  Field28,
  DatadeEnvioSolicitada1,
  Text110220221,
  Field29,
  DataFinaldaProducao1,
  Text140220221,
  Card025,
  Title130,
  Materiais1,
  Body22,
  ColumnMateriaisTable2,
  MateriaisTable2,
  Card026,
  Title137,
  Processo1,
  Body23,
  InstanceComponentstepsgroupnavig2,
  InstanceComponentstepsitemnaviga10,
  Wrapper11,
  StepsItemProgressIcon10,
  Text21,
  Inprogress1,
  VectorComponentnavigationsteps18,
  StepsItemArrow8,
  Rectangle18,
  VectorComponentnavigationsteps19,
  InstanceComponentstepsitemnaviga11,
  Wrapper12,
  StepsItemProgressIcon11,
  Text34,
  Waiting4,
  VectorComponentnavigationsteps20,
  StepsItemArrow9,
  Rectangle19,
  VectorComponentnavigationsteps21,
  InstanceComponentstepsitemnaviga12,
  Wrapper13,
  StepsItemProgressIcon12,
  Text35,
  Waiting5,
  VectorComponentnavigationsteps22,
  StepsItemArrow10,
  Rectangle110,
  VectorComponentnavigationsteps23,
  InstanceComponentstepsitemnaviga13,
  Wrapper14,
  StepsItemProgressIcon13,
  Text36,
  Waiting6,
  VectorComponentnavigationsteps24,
  StepsItemArrow11,
  Rectangle111,
  VectorComponentnavigationsteps25,
  InstanceComponentstepsitemnaviga14,
  Wrapper15,
  StepsItemProgressIcon14,
  Text37,
  Waiting7,
  VectorComponentnavigationsteps26,
  Content43Row1Column51,
  IconOutlinedContainer,
  Final,
  Content44Row2Column51,
  IconOutlinedContainer1,
  Inicio,
  ColumnFrameComponentprecorkdetalhes,
  FrameComponentprecorkdetalhes,
  ActionRow,
  ButtonFinish1,
} from './styles';

const PreCorkDetalhesPage = () => {
  let navigate = useNavigate();
  const dataSourceMateriaisTable2 = [
    {
      key: '0',
      title1310: '30000806',
      title1321: '34.400%',
      title1332: '340-81:TAP WATER: PIPELINE',
      title1343: '50 Kg',
      title1354: '-',
      title1365: '-',
    },
    {
      key: '1',
      title1310: '30226125',
      title1321: '1.800%',
      title1332: '531-0130:CERIDUST 3715:BAG2',
      title1343: '2,6 Kg',
      title1354: '-',
      title1365: '-',
    },
    {
      key: '2',
      title1310: '30537820',
      title1321: '3.800%',
      title1332: '425-0401:MONOETANOLAMINA',
      title1343: '5,5 Kg',
      title1354: '-',
      title1365: '-',
    },
    {
      key: '3',
      title1310: 'Total',
      title1321: 'Text',
      title1332: 'Text',
      title1343: '58,1 Kg',
      title1354: '0 Kg',
      title1365: 'Text',
    },
  ];
  const dataSourceFrameComponentprecorkdetalhes = [
    {
      key: '0',
      title1380: '10/03/2022',
      title1391: '11:02 (BRT)',
      title1402: 'Arnaldo Pereira',
      title1413: 'Produção',
      title1424: 'Homogenização',
      title1435: [
        <Content43Row1Column51>
          <IconOutlinedContainer />
          <Final>Final</Final>
        </Content43Row1Column51>,
      ],
    },
    {
      key: '1',
      title1380: '10/03/2022',
      title1391: '09:37 (BRT)',
      title1402: 'Arnaldo Pereira',
      title1413: 'Produção',
      title1424: 'Homogenização',
      title1435: [
        <Content44Row2Column51>
          <IconOutlinedContainer1 />
          <Inicio>Início</Inicio>
        </Content44Row2Column51>,
      ],
    },
  ];

  const navigateToFinalizarPreCorkModal = () => {
    navigate('/landing-page/finalizar-pre-cork-modal');
  };

  return (
    <PreCorkDetalhes>
      <PageHeader10>
        <Header13>
          <ButtonBack10 type="text" icon={<ArrowLeftOutlined />} />
          <Frame44>
            <OrdemdeProducao1>Ordem de Produção</OrdemdeProducao1>
            <Text101461121931>#10146112193</Text101461121931>
          </Frame44>
          <Actions6>
            <ButtonFinish
              onClick={navigateToFinalizarPreCorkModal}
              type="primary"
              icon={<CheckOutlined />}
            >
              Finalizar
            </ButtonFinish>
          </Actions6>
        </Header13>
      </PageHeader10>
      <Body20>
        <Card013>
          <Title129>
            <Geral1>Geral</Geral1>
          </Title129>
          <Body21>
            <Row13>
              <Field20>
                <Produto1>Produto:</Produto1>
                <TextComponent913307121>
                  91330712 242259A:PRETO 2 FR 395665:FK22
                </TextComponent913307121>
              </Field20>
            </Row13>
            <Row22>
              <Field21>
                <OrdemdeFabricacao1>Ordem de Fabricação:</OrdemdeFabricacao1>
                <Text3SCUQB00E71>3SCUQB00E7</Text3SCUQB00E71>
              </Field21>
            </Row22>
            <Row32>
              <Field22>
                <Quantidade1>Quantidade:</Quantidade1>
                <Text1000Kg1>1000 Kg</Text1000Kg1>
              </Field22>
              <Field23>
                <QuantidadePedidaCliente1>
                  Quantidade Pedida Cliente:
                </QuantidadePedidaCliente1>
                <Text500Kg1>500 Kg</Text500Kg1>
              </Field23>
            </Row32>
            <DividerHorizontal2>
              <Line2 />
            </DividerHorizontal2>
            <Row42>
              <Field24>
                <PedidodoCliente1>Pedido do Cliente:</PedidodoCliente1>
                <Text176880381>17688038</Text176880381>
              </Field24>
              <Field25>
                <NomedoCliente1>Nome do Cliente:</NomedoCliente1>
                <Text179719KLABINSA1>179719 - KLABIN S.A.</Text179719KLABINSA1>
              </Field25>
            </Row42>
            <Row52>
              <Field26>
                <DatadeColocacaodoPedido1>
                  Data de Colocação do Pedido:
                </DatadeColocacaodoPedido1>
                <Text07022022114017BRT1>
                  07/02/2022 - 11:40:17 (BRT)
                </Text07022022114017BRT1>
              </Field26>
              <Field27>
                <DatadeConfirmacao1>Data de Confirmação:</DatadeConfirmacao1>
                <Text310120221>31/01/2022</Text310120221>
              </Field27>
              <Field28>
                <DatadeEnvioSolicitada1>
                  Data de Envio Solicitada:
                </DatadeEnvioSolicitada1>
                <Text110220221>11/02/2022</Text110220221>
              </Field28>
              <Field29>
                <DataFinaldaProducao1>
                  Data Final da Produção
                </DataFinaldaProducao1>
                <Text140220221>14/02/2022</Text140220221>
              </Field29>
            </Row52>
          </Body21>
        </Card013>
        <Card025>
          <Title130>
            <Materiais1>Materiais</Materiais1>
          </Title130>
          <Body22>
            <MateriaisTable2 dataSource={dataSourceMateriaisTable2}>
              <ColumnMateriaisTable2
                title="Código"
                dataIndex="title1310"
                key="title1310"
                align="left"
                filters={[
                  { text: '30000806', value: '30000806' },
                  { text: '30226125', value: '30226125' },
                  { text: '30537820', value: '30537820' },
                  { text: 'Total', value: 'Total' },
                ]}
                width="264px"
                onFilter={(value, record: any) =>
                  record.title1310.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable2
                title="Por (%)"
                dataIndex="title1321"
                key="title1321"
                align="left"
                filters={[
                  { text: '34.400%', value: '34.400%' },
                  { text: '1.800%', value: '1.800%' },
                  { text: '3.800%', value: '3.800%' },
                  { text: 'Text', value: 'Text' },
                ]}
                width="264px"
                onFilter={(value, record: any) =>
                  record.title1321.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable2
                title="Descrição"
                dataIndex="title1332"
                key="title1332"
                align="left"
                filters={[
                  {
                    text: '340-81:TAP WATER: PIPELINE',
                    value: '340-81:TAP WATER: PIPELINE',
                  },
                  {
                    text: '531-0130:CERIDUST 3715:BAG2',
                    value: '531-0130:CERIDUST 3715:BAG2',
                  },
                  {
                    text: '425-0401:MONOETANOLAMINA',
                    value: '425-0401:MONOETANOLAMINA',
                  },
                  { text: 'Text', value: 'Text' },
                ]}
                width="264px"
                onFilter={(value, record: any) =>
                  record.title1332.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable2
                title="Quantidade Pedida"
                dataIndex="title1343"
                key="title1343"
                align="left"
                filters={[
                  { text: '50 Kg', value: '50 Kg' },
                  { text: '2,6 Kg', value: '2,6 Kg' },
                  { text: '5,5 Kg', value: '5,5 Kg' },
                  { text: '58,1 Kg', value: '58,1 Kg' },
                ]}
                width="264px"
                onFilter={(value, record: any) =>
                  record.title1343.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable2
                title="Quantidade Real"
                dataIndex="title1354"
                key="title1354"
                align="left"
                filters={[
                  { text: '-', value: '-' },
                  { text: '0 Kg', value: '0 Kg' },
                ]}
                width="264px"
                onFilter={(value, record: any) =>
                  record.title1354.indexOf(value) === 0
                }
              />
              <ColumnMateriaisTable2
                title="Adições / Motivo"
                dataIndex="title1365"
                key="title1365"
                align="left"
                filters={[
                  { text: '-', value: '-' },
                  { text: 'Text', value: 'Text' },
                ]}
                width="264px"
                onFilter={(value, record: any) =>
                  record.title1365.indexOf(value) === 0
                }
              />
            </MateriaisTable2>
          </Body22>
        </Card025>
        <Card026>
          <Title137>
            <Processo1>Processo</Processo1>
          </Title137>
          <Body23>
            <InstanceComponentstepsgroupnavig2>
              <InstanceComponentstepsitemnaviga10>
                <Wrapper11>
                  <StepsItemProgressIcon10>
                    <Text21>1</Text21>
                  </StepsItemProgressIcon10>
                  <div>
                    <Inprogress1>Pesar</Inprogress1>
                  </div>
                </Wrapper11>
                <VectorComponentnavigationsteps18 />
              </InstanceComponentstepsitemnaviga10>
              <StepsItemArrow8>
                <Rectangle18 />
                <VectorComponentnavigationsteps19 />
              </StepsItemArrow8>
              <InstanceComponentstepsitemnaviga11>
                <Wrapper12>
                  <StepsItemProgressIcon11>
                    <Text34>2</Text34>
                  </StepsItemProgressIcon11>
                  <div>
                    <Waiting4>Homogenizar</Waiting4>
                  </div>
                </Wrapper12>
                <VectorComponentnavigationsteps20 />
              </InstanceComponentstepsitemnaviga11>
              <StepsItemArrow9>
                <Rectangle19 />
                <VectorComponentnavigationsteps21 />
              </StepsItemArrow9>
              <InstanceComponentstepsitemnaviga12>
                <Wrapper13>
                  <StepsItemProgressIcon12>
                    <Text35>3</Text35>
                  </StepsItemProgressIcon12>
                  <div>
                    <Waiting5>Controle de Qualidade</Waiting5>
                  </div>
                </Wrapper13>
                <VectorComponentnavigationsteps22 />
              </InstanceComponentstepsitemnaviga12>
              <StepsItemArrow10>
                <Rectangle110 />
                <VectorComponentnavigationsteps23 />
              </StepsItemArrow10>
              <InstanceComponentstepsitemnaviga13>
                <Wrapper14>
                  <StepsItemProgressIcon13>
                    <Text36>4</Text36>
                  </StepsItemProgressIcon13>
                  <div>
                    <Waiting6>Envasar</Waiting6>
                  </div>
                </Wrapper14>
                <VectorComponentnavigationsteps24 />
              </InstanceComponentstepsitemnaviga13>
              <StepsItemArrow11>
                <Rectangle111 />
                <VectorComponentnavigationsteps25 />
              </StepsItemArrow11>
              <InstanceComponentstepsitemnaviga14>
                <Wrapper15>
                  <StepsItemProgressIcon14>
                    <Text37>5</Text37>
                  </StepsItemProgressIcon14>
                  <div>
                    <Waiting7>Rotular</Waiting7>
                  </div>
                </Wrapper15>
                <VectorComponentnavigationsteps26 />
              </InstanceComponentstepsitemnaviga14>
            </InstanceComponentstepsgroupnavig2>
            <FrameComponentprecorkdetalhes
              dataSource={dataSourceFrameComponentprecorkdetalhes}
            >
              <ColumnFrameComponentprecorkdetalhes
                title="Data"
                dataIndex="title1380"
                key="title1380"
                align="left"
                width="107px"
              />
              <ColumnFrameComponentprecorkdetalhes
                title="Horário"
                dataIndex="title1391"
                key="title1391"
                align="left"
                width="106px"
              />
              <ColumnFrameComponentprecorkdetalhes
                title="Operador"
                dataIndex="title1402"
                key="title1402"
                align="left"
                width="1016px"
              />
              <ColumnFrameComponentprecorkdetalhes
                title="Departamento"
                dataIndex="title1413"
                key="title1413"
                align="left"
                width="122px"
              />
              <ColumnFrameComponentprecorkdetalhes
                title="Etapa"
                dataIndex="title1424"
                key="title1424"
                align="left"
                width="135px"
              />
              <ColumnFrameComponentprecorkdetalhes
                title="Ação"
                dataIndex="title1435"
                key="title1435"
                align="left"
                width="98px"
              />
            </FrameComponentprecorkdetalhes>
          </Body23>
        </Card026>
        <ActionRow>
          <ButtonFinish1
            onClick={navigateToFinalizarPreCorkModal}
            type="primary"
            icon={<CheckOutlined />}
          >
            Finalizar
          </ButtonFinish1>
        </ActionRow>
      </Body20>
    </PreCorkDetalhes>
  );
};

export default PreCorkDetalhesPage;
