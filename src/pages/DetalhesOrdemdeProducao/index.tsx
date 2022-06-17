import React from 'react';



import {
DetalhesOrdemdeProducao,
PageHeader5,
Header8,
IconOutlinedArrowLeft,
OrdemdeProducao,
Text10146112193,
Body10,
Card011,
Title111,
Geral,
Body11,
Row11,
Field10,
Produto,
TextComponent91330712,
Row21,
Field11,
OrdemdeFabricacao,
Text3SCUQB00E7,
Row31,
Field12,
Quantidade,
Text1000Kg,
Field13,
QuantidadePedidaCliente,
Text500Kg,
DividerHorizontal1,
Line1,
Row41,
Field14,
PedidodoCliente,
Text17688038,
Field15,
NomedoCliente,
Text179719KLABINSA,
Row51,
Field16,
DatadeColocacaodoPedido,
Text07022022114017BRT,
Field17,
DatadeConfirmacao,
Text31012022,
Field18,
DatadeEnvioSolicitada,
Text11022022,
Field19,
DataFinaldaProducao,
Text14022022,
Card022,
Title112,
Materiais,
Body12,
Content26Row4Column11,
Content27Row4Column21,
Content28Row4Column51,
ColumnMateriaisTable1,
MateriaisTable1,
Card023,
Title113,
Processo,
Body13,
InstanceComponentstepsgroupnavig1,
InstanceComponentstepsitemnaviga5,
Wrapper6,
StepsItemProgressIcon5,
Text2,
Content5,
Inprogress,
VectorComponentnavigationsteps9,
StepsItemArrow4,
Rectangle14,
VectorComponentnavigationsteps10,
InstanceComponentstepsitemnaviga6,
Wrapper7,
StepsItemProgressIcon6,
Text3,
Content6,
Waiting,
VectorComponentnavigationsteps11,
StepsItemArrow5,
Rectangle15,
VectorComponentnavigationsteps12,
InstanceComponentstepsitemnaviga7,
Wrapper8,
StepsItemProgressIcon7,
Text31,
Content7,
Waiting1,
VectorComponentnavigationsteps13,
StepsItemArrow6,
Rectangle16,
VectorComponentnavigationsteps14,
InstanceComponentstepsitemnaviga8,
Wrapper9,
StepsItemProgressIcon8,
Text32,
Content8,
Waiting2,
VectorComponentnavigationsteps15,
StepsItemArrow7,
Rectangle17,
VectorComponentnavigationsteps16,
InstanceComponentstepsitemnaviga9,
Wrapper10,
StepsItemProgressIcon9,
Text33,
Content9,
Waiting3,
VectorComponentnavigationsteps17,
} from './styles';

const DetalhesOrdemdeProducaoPage = () => {




const dataSourceMateriaisTable1 = [
{
key: '0',
codigo40: 
'30000806',
por41: 
'34.400%',
descricao42: 
'340-81:TAP WATER: PIPELINE',
quantidadePedida43: 
'50 Kg',
quantidadeReal44: 
'-',
adicoesMotivo45: 
'-',
},
{
key: '1',
codigo40: 
'30226125',
por41: 
'1.800%',
descricao42: 
'531-0130:CERIDUST 3715:BAG2',
quantidadePedida43: 
'2,6 Kg',
quantidadeReal44: 
'-',
adicoesMotivo45: 
'-',
},
{
key: '2',
codigo40: 
'30537820',
por41: 
'3.800%',
descricao42: 
'425-0401:MONOETANOLAMINA',
quantidadePedida43: 
'5,5 Kg',
quantidadeReal44: 
'-',
adicoesMotivo45: 
'-',
},
{
key: '3',
codigo40: 
'Total',
por41: 
[
  <Content26Row4Column11    >
  </Content26Row4Column11>
,
],
descricao42: 
[
  <Content27Row4Column21    >
  </Content27Row4Column21>
,
],
quantidadePedida43: 
'58,1 Kg',
quantidadeReal44: 
'0 Kg',
adicoesMotivo45: 
[
  <Content28Row4Column51    >
  </Content28Row4Column51>
,
],
},
]





return (
        <DetalhesOrdemdeProducao    >
  <PageHeader5    >
    <Header8    >
      <IconOutlinedArrowLeft    >
      </IconOutlinedArrowLeft>
      <OrdemdeProducao >
        Ordem de Produção
      </OrdemdeProducao>
      <Text10146112193 >
        #10146112193
      </Text10146112193>
    </Header8>
  </PageHeader5>
  <Body10    >
    <Card011    >
      <Title111    >
        <Geral >
          Geral
        </Geral>
      </Title111>
      <Body11    >
        <Row11    >
          <Field10    >
            <Produto >
              Produto:
            </Produto>
            <TextComponent91330712 >
              91330712 242259A:PRETO 2 FR 395665:FK22
            </TextComponent91330712>
          </Field10>
        </Row11>
        <Row21    >
          <Field11    >
            <OrdemdeFabricacao >
              Ordem de Fabricação:
            </OrdemdeFabricacao>
            <Text3SCUQB00E7 >
              3SCUQB00E7
            </Text3SCUQB00E7>
          </Field11>
        </Row21>
        <Row31    >
          <Field12    >
            <Quantidade >
              Quantidade:
            </Quantidade>
            <Text1000Kg >
              1000 Kg
            </Text1000Kg>
          </Field12>
          <Field13    >
            <QuantidadePedidaCliente >
              Quantidade Pedida Cliente:
            </QuantidadePedidaCliente>
            <Text500Kg >
              500 Kg
            </Text500Kg>
          </Field13>
        </Row31>
        <DividerHorizontal1    >
          <Line1    >
          </Line1>
        </DividerHorizontal1>
        <Row41    >
          <Field14    >
            <PedidodoCliente >
              Pedido do Cliente:
            </PedidodoCliente>
            <Text17688038 >
              17688038
            </Text17688038>
          </Field14>
          <Field15    >
            <NomedoCliente >
              Nome do Cliente:
            </NomedoCliente>
            <Text179719KLABINSA >
              179719 - KLABIN S.A.
            </Text179719KLABINSA>
          </Field15>
        </Row41>
        <Row51    >
          <Field16    >
            <DatadeColocacaodoPedido >
              Data de Colocação do Pedido:
            </DatadeColocacaodoPedido>
            <Text07022022114017BRT >
              07/02/2022 - 11:40:17 (BRT)
            </Text07022022114017BRT>
          </Field16>
          <Field17    >
            <DatadeConfirmacao >
              Data de Confirmação:
            </DatadeConfirmacao>
            <Text31012022 >
              31/01/2022
            </Text31012022>
          </Field17>
          <Field18    >
            <DatadeEnvioSolicitada >
              Data de Envio Solicitada:
            </DatadeEnvioSolicitada>
            <Text11022022 >
              11/02/2022
            </Text11022022>
          </Field18>
          <Field19    >
            <DataFinaldaProducao >
              Data Final da Produção
            </DataFinaldaProducao>
            <Text14022022 >
              14/02/2022
            </Text14022022>
          </Field19>
        </Row51>
      </Body11>
    </Card011>
    <Card022    >
      <Title112    >
        <Materiais >
          Materiais
        </Materiais>
      </Title112>
      <Body12    >
        <MateriaisTable1 dataSource={dataSourceMateriaisTable1}> 
<ColumnMateriaisTable1 title='Código' dataIndex='codigo40' key='codigo40' align='left'filters={[{text: '30000806', value: '30000806'},{text: '30226125', value: '30226125'},{text: '30537820', value: '30537820'},{text: 'Total', value: 'Total'},]}width='97px'onFilter={(value, record: any) => record.codigo40.indexOf(value) === 0 } /> 
<ColumnMateriaisTable1 title='Por (%)' dataIndex='por41' key='por41' align='left'width='98px' /> 
<ColumnMateriaisTable1 title='Descrição' dataIndex='descricao42' key='descricao42' align='left'width='531.5px' /> 
<ColumnMateriaisTable1 title='Quantidade Pedida' dataIndex='quantidadePedida43' key='quantidadePedida43' align='left'filters={[{text: '50 Kg', value: '50 Kg'},{text: '2,6 Kg', value: '2,6 Kg'},{text: '5,5 Kg', value: '5,5 Kg'},{text: '58,1 Kg', value: '58,1 Kg'},]}width='171px'onFilter={(value, record: any) => record.quantidadePedida43.indexOf(value) === 0 } /> 
<ColumnMateriaisTable1 title='Quantidade Real' dataIndex='quantidadeReal44' key='quantidadeReal44' align='left'filters={[{text: '-', value: '-'},{text: '0 Kg', value: '0 Kg'},]}width='155px'onFilter={(value, record: any) => record.quantidadeReal44.indexOf(value) === 0 } /> 
<ColumnMateriaisTable1 title='Adições / Motivo' dataIndex='adicoesMotivo45' key='adicoesMotivo45' align='left'width='531.5px' /> 
        </MateriaisTable1>
      </Body12>
    </Card022>
    <Card023    >
      <Title113    >
        <Processo >
          Processo
        </Processo>
      </Title113>
      <Body13    >
        <InstanceComponentstepsgroupnavig1    >
          <InstanceComponentstepsitemnaviga5    >
            <Wrapper6    >
              <StepsItemProgressIcon5    >
                <Text2 >
                  1
                </Text2>
              </StepsItemProgressIcon5>
              <Content5    >
                <Inprogress >
                  Pesar
                </Inprogress>
              </Content5>
            </Wrapper6>
            <VectorComponentnavigationsteps9    >
            </VectorComponentnavigationsteps9>
          </InstanceComponentstepsitemnaviga5>
          <StepsItemArrow4    >
            <Rectangle14    >
            </Rectangle14>
            <VectorComponentnavigationsteps10    >
            </VectorComponentnavigationsteps10>
          </StepsItemArrow4>
          <InstanceComponentstepsitemnaviga6    >
            <Wrapper7    >
              <StepsItemProgressIcon6    >
                <Text3 >
                  2
                </Text3>
              </StepsItemProgressIcon6>
              <Content6    >
                <Waiting >
                  Homogenizar
                </Waiting>
              </Content6>
            </Wrapper7>
            <VectorComponentnavigationsteps11    >
            </VectorComponentnavigationsteps11>
          </InstanceComponentstepsitemnaviga6>
          <StepsItemArrow5    >
            <Rectangle15    >
            </Rectangle15>
            <VectorComponentnavigationsteps12    >
            </VectorComponentnavigationsteps12>
          </StepsItemArrow5>
          <InstanceComponentstepsitemnaviga7    >
            <Wrapper8    >
              <StepsItemProgressIcon7    >
                <Text31 >
                  3
                </Text31>
              </StepsItemProgressIcon7>
              <Content7    >
                <Waiting1 >
                  Controle de Qualidade
                </Waiting1>
              </Content7>
            </Wrapper8>
            <VectorComponentnavigationsteps13    >
            </VectorComponentnavigationsteps13>
          </InstanceComponentstepsitemnaviga7>
          <StepsItemArrow6    >
            <Rectangle16    >
            </Rectangle16>
            <VectorComponentnavigationsteps14    >
            </VectorComponentnavigationsteps14>
          </StepsItemArrow6>
          <InstanceComponentstepsitemnaviga8    >
            <Wrapper9    >
              <StepsItemProgressIcon8    >
                <Text32 >
                  4
                </Text32>
              </StepsItemProgressIcon8>
              <Content8    >
                <Waiting2 >
                  Envasar
                </Waiting2>
              </Content8>
            </Wrapper9>
            <VectorComponentnavigationsteps15    >
            </VectorComponentnavigationsteps15>
          </InstanceComponentstepsitemnaviga8>
          <StepsItemArrow7    >
            <Rectangle17    >
            </Rectangle17>
            <VectorComponentnavigationsteps16    >
            </VectorComponentnavigationsteps16>
          </StepsItemArrow7>
          <InstanceComponentstepsitemnaviga9    >
            <Wrapper10    >
              <StepsItemProgressIcon9    >
                <Text33 >
                  5
                </Text33>
              </StepsItemProgressIcon9>
              <Content9    >
                <Waiting3 >
                  Rotular
                </Waiting3>
              </Content9>
            </Wrapper10>
            <VectorComponentnavigationsteps17    >
            </VectorComponentnavigationsteps17>
          </InstanceComponentstepsitemnaviga9>
        </InstanceComponentstepsgroupnavig1>
      </Body13>
    </Card023>
  </Body10>
</DetalhesOrdemdeProducao>

    )

}

export default DetalhesOrdemdeProducaoPage
