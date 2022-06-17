import React from 'react';



import {
FrameComponentanaliseeaprovac,
PageHeader4,
Header7,
TextComponentanlise,
Body9,
Checkbox9Row1Column01,
CheckboxInactiveDefault6,
TagStatus11Row1Column61,
Warning3,
Checkbox10Row2Column01,
CheckboxInactiveDefault7,
TagStatus12Row2Column61,
Error4,
Checkbox11Row3Column01,
CheckboxInactiveDefault8,
TagStatus13Row3Column61,
Success3,
ColumnFrameComponentanaliseeaprovac1,
FrameComponentanaliseeaprovac1,
} from './styles';

const AnaliseeAprovacaodeAmostraPage = () => {




const dataSourceFrameComponentanaliseeaprovac1 = [
{
key: '0',
checkbox20: 
[
  <Checkbox9Row1Column01    >
    <CheckboxInactiveDefault6    >
    </CheckboxInactiveDefault6>
  </Checkbox9Row1Column01>
,
],
title1061: 
'10146193',
title1072: 
'179719 - João da Silva',
title1083: 
'91330712 242259A: PRETO 2 FR 395665:FK22',
title1094: 
'Tinta',
title1105: 
'Make & Pack',
status116: 
[
  <TagStatus11Row1Column61    >
    <Warning3 >
      Análise requerida
    </Warning3>
  </TagStatus11Row1Column61>
,
],
},
{
key: '1',
checkbox20: 
[
  <Checkbox10Row2Column01    >
    <CheckboxInactiveDefault7    >
    </CheckboxInactiveDefault7>
  </Checkbox10Row2Column01>
,
],
title1061: 
'10146194',
title1072: 
'773720 - Mario Barbosa',
title1083: 
'91330712 242259A: PRETO 2 FR 395665:FK22',
title1094: 
'Tinta',
title1105: 
'Make & Pack',
status116: 
[
  <TagStatus12Row2Column61    >
    <Error4 >
      Enviado para Retoque
    </Error4>
  </TagStatus12Row2Column61>
,
],
},
{
key: '2',
checkbox20: 
[
  <Checkbox11Row3Column01    >
    <CheckboxInactiveDefault8    >
    </CheckboxInactiveDefault8>
  </Checkbox11Row3Column01>
,
],
title1061: 
'10146195',
title1072: 
'379721 - John Carlos',
title1083: 
'91330712 242259A: PRETO 2 FR 395665:FK22',
title1094: 
'Verniz',
title1105: 
'Make & Pack',
status116: 
[
  <TagStatus13Row3Column61    >
    <Success3 >
      Aprovado
    </Success3>
  </TagStatus13Row3Column61>
,
],
},
]





return (
        <FrameComponentanaliseeaprovac    >
  <PageHeader4    >
    <Header7    >
      <TextComponentanlise >
        Análise e Aprovação de Amostra
      </TextComponentanlise>
    </Header7>
  </PageHeader4>
  <Body9    >
    <FrameComponentanaliseeaprovac1 dataSource={dataSourceFrameComponentanaliseeaprovac1}> 
<ColumnFrameComponentanaliseeaprovac1 title='' dataIndex='checkbox20' key='checkbox20' align='center'width='48px' /> 
<ColumnFrameComponentanaliseeaprovac1 title='OP' dataIndex='title1061' key='title1061' align='left'filters={[{text: '10146193', value: '10146193'},{text: '10146194', value: '10146194'},{text: '10146195', value: '10146195'},]}width='95px'onFilter={(value, record: any) => record.title1061.indexOf(value) === 0 } /> 
<ColumnFrameComponentanaliseeaprovac1 title='Cliente' dataIndex='title1072' key='title1072' align='left'filters={[{text: '179719 - João da Silva', value: '179719 - João da Silva'},{text: '773720 - Mario Barbosa', value: '773720 - Mario Barbosa'},{text: '379721 - John Carlos', value: '379721 - John Carlos'},]}width='541px'onFilter={(value, record: any) => record.title1072.indexOf(value) === 0 } /> 
<ColumnFrameComponentanaliseeaprovac1 title='Produto' dataIndex='title1083' key='title1083' align='left'filters={[{text: '91330712 242259A: PRETO 2 FR 395665:FK22', value: '91330712 242259A: PRETO 2 FR 395665:FK22'},]}width='541px'onFilter={(value, record: any) => record.title1083.indexOf(value) === 0 } /> 
<ColumnFrameComponentanaliseeaprovac1 title='Categoria' dataIndex='title1094' key='title1094' align='left'filters={[{text: 'Tinta', value: 'Tinta'},{text: 'Verniz', value: 'Verniz'},]}width='113px'onFilter={(value, record: any) => record.title1094.indexOf(value) === 0 } /> 
<ColumnFrameComponentanaliseeaprovac1 title='Tipo' dataIndex='title1105' key='title1105' align='left'filters={[{text: 'Make & Pack', value: 'Make & Pack'},]}width='113px'onFilter={(value, record: any) => record.title1105.indexOf(value) === 0 } /> 
<ColumnFrameComponentanaliseeaprovac1 title='Status' dataIndex='status116' key='status116' align='left'width='165px' /> 
    </FrameComponentanaliseeaprovac1>
  </Body9>
</FrameComponentanaliseeaprovac>

    )

}

export default AnaliseeAprovacaodeAmostraPage
