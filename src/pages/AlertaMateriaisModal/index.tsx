import React from 'react';

import {CloseOutlined} from '@ant-design/icons' 


import {
AlertaMateriaisModal,
Header17,
Title160,
ButtonClose10,
Body29,
Row011,
TextComponentforam,
ColumnAlertaMateriaisTable,
AlertaMateriaisTable,
Footer2,
ButtonBack8,
ButtonApply6,
} from './styles';

const AlertaMateriaisModalPage = () => {




const dataSourceAlertaMateriaisTable = [
{
key: '0',
title1610: 
'30226125',
title1621: 
'25.000%',
title1632: 
'531-0130:CERIDUST 3715:BAG2',
quantidadeKg33: 
'20 Kg',
title1644: 
'-',
},
{
key: '1',
title1610: 
'30537820',
title1621: 
'25.000%',
title1632: 
'425-0401:MONOETANOLAMINA',
quantidadeKg33: 
'20 Kg',
title1644: 
'-',
},
]





return (
        <AlertaMateriaisModal    >
  <Header17    >
    <Title160    >
    </Title160>
    <ButtonClose10  
      type='text'
      icon={<CloseOutlined/>}
      >
    </ButtonClose10>
  </Header17>
  <Body29    >
    <Row011    >
      <TextComponentforam >
        Foram encontradas as seguintes inconsistências com o SAP. Deseja continuar mesmo assim?
      </TextComponentforam>
    </Row011>
    <AlertaMateriaisTable dataSource={dataSourceAlertaMateriaisTable}> 
<ColumnAlertaMateriaisTable title='Código' dataIndex='title1610' key='title1610' align='left'width='95px' /> 
<ColumnAlertaMateriaisTable title='Por (%)' dataIndex='title1621' key='title1621' align='left'width='86px' /> 
<ColumnAlertaMateriaisTable title='Descrição' dataIndex='title1632' key='title1632' align='left'width='318.5px' /> 
<ColumnAlertaMateriaisTable title='Quantidade (Kg)' dataIndex='quantidadeKg33' key='quantidadeKg33' align='left'width='134px' /> 
<ColumnAlertaMateriaisTable title='Adições/Motivo' dataIndex='title1644' key='title1644' align='left'width='318.5px' /> 
    </AlertaMateriaisTable>
  </Body29>
  <Footer2    >
    <ButtonBack8  
      type='default'
      >
        Voltar
    </ButtonBack8>
    <ButtonApply6  
      type='primary'
      >
        Sim, continuar
    </ButtonApply6>
  </Footer2>
</AlertaMateriaisModal>

    )

}

export default AlertaMateriaisModalPage
