import styled from 'styled-components'

import GenericCodeButton from '../../components/Button'
import {Table} from 'antd'
import GenericSelect from '../../components/Select'
import GenericInput from '../../components/Input'
import IconOutlinedDownImage from './assets/I1048_159865_125_59362.png' 
import IconOutlinedDown1Image from './assets/I1048_159712_125_59362.png' 
import IconOutlinedDown2Image from './assets/I1048_159877_125_59362.png' 
import GenericFormItem from '../../components/FormItem'

export const AlterarMateriaisModal = styled.div`
height: 100%;
width: 1000px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
border-radius: 2px;
  background-color: #FFFFFF;
`;
export const Header16 = styled.div`
height: 64px;
width: 1000px;
display: flex;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-start;
align-items: center;
  padding: 16.0px 24.0px 16.0px 24.0px;
  background-color: #000D18;
`;
export const Title155 = styled.div`
height: 24px;
width: 912px;
display: flex;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-start;
align-items: center;
`;
import GenericText from '../../components/Text'
export const AlterarMateriais = styled(GenericText)`
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        text-align: left;
        margin: 0px;
      position: static;
      width: 122px;
`;

export const OP10146121932 = styled(GenericText)`
      font-family: Roboto;
      font-size: 16px;
      line-height: 24px;
      color: #FFFFFF;
      text-align: left;
      margin: 0px;
    position: static;
    width: 126px;
`;

export const ButtonClose11 = styled(GenericCodeButton)`
    width: 32px;
    height: 32px;
    border-radius: 2px;
    height: 32px;
`;

export const Body28 = styled.div`
height: 510px;
width: 1000px;
display: flex;
flex-direction: column;
box-sizing: border-box;
gap: 16.0px;
justify-content: flex-start;
align-items: center;
padding: 24.0px;
`;
export const Row01 = styled.div`
height: 32px;
width: 952px;
display: flex;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-end;
align-items: flex-start;
`;
export const ButtonNewComponent = styled(GenericCodeButton)`
      width: 144px;
      height: 32px;
      border-radius: 2px;
      height: 32px;
`;

export const AlterarMateriaisTable = styled((Table))`
  width: 952px;
`;

export const ColumnAlterarMateriaisTable = styled((Table.Column))`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

export const SelectInput = styled(GenericSelect)`
  width: 258.5px;
position: static;
`;

export const SelectInputOption = styled((Select.Option))`
`;

export const InputBasic26 = styled((GenericInput))`
width: 102px;
`;

export const SelectInput4Row1Column41 = styled.div`
height: 34px;
width: 260px;
display: flex;
border: 1px solid #DADADA;
box-sizing: border-box;
gap: 4.0px;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
padding: 5.0px 12.0px 5.0px 12.0px;
  background-color: #FFFFFF;
`;
export const Select19 = styled(GenericText)`
font-family: Roboto;
line-height: 22px;
text-align: left;
margin: 0px;
position: static;
width: 215.5px;
`;

export const IconOutlinedDown = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedDownImage});
  background-repeat: no-repeat;
`;
export const Content45Row1Column51 = styled.div`
height: 56px;
width: 56px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: center;
align-items: center;
padding: 0px 16.0px 0px 16.0px;
`;
export const ButtonDelete = styled(GenericCodeButton)`
width: 24px;
height: 24px;
border-radius: 2px;
height: 24px;
`;

export const Content46Row2Column51 = styled.div`
height: 56px;
width: 56px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: center;
align-items: center;
padding: 0px 16.0px 0px 16.0px;
`;
export const ButtonUndo = styled(GenericCodeButton)`
width: 24px;
height: 24px;
border-radius: 2px;
height: 24px;
`;

export const Content47Row3Column51 = styled.div`
height: 56px;
width: 56px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: center;
align-items: center;
padding: 0px 16.0px 0px 16.0px;
`;
export const ButtonDelete1 = styled(GenericCodeButton)`
width: 24px;
height: 24px;
border-radius: 2px;
height: 24px;
`;

export const SelectInput5Row4Column21 = styled.div`
height: 34px;
width: 260px;
display: flex;
border: 1px solid #DADADA;
box-sizing: border-box;
gap: 4.0px;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
padding: 5.0px 12.0px 5.0px 12.0px;
  background-color: #FFFFFF;
`;
export const Select13 = styled(GenericText)`
font-family: Roboto;
line-height: 22px;
text-align: left;
margin: 0px;
position: static;
width: 215.5px;
`;

export const IconOutlinedDown1 = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedDown1Image});
  background-repeat: no-repeat;
`;
export const InputBasic39Row4Column31 = styled.div`
height: 34px;
width: 104px;
display: flex;
border: 1px solid #DADADA;
box-sizing: border-box;
gap: 10.0px;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
padding: 5.0px 12.0px 5.0px 12.0px;
  background-color: #FFFFFF;
`;
export const Inputplaceholder6 = styled(GenericText)`
font-family: Roboto;
line-height: 22px;
text-align: left;
margin: 0px;
position: static;
width: 79px;
`;

export const SelectInput6Row4Column41 = styled.div`
height: 34px;
width: 260px;
display: flex;
border: 1px solid #DADADA;
box-sizing: border-box;
gap: 4.0px;
justify-content: flex-start;
align-items: center;
border-radius: 2px;
padding: 5.0px 12.0px 5.0px 12.0px;
  background-color: #FFFFFF;
`;
export const Select20 = styled(GenericText)`
font-family: Roboto;
line-height: 22px;
text-align: left;
margin: 0px;
position: static;
width: 215.5px;
`;

export const IconOutlinedDown2 = styled.div`
height: 16px;
width: 16px;
box-sizing: border-box;
  background: url(${IconOutlinedDown2Image});
  background-repeat: no-repeat;
`;
export const Content48Row4Column51 = styled.div`
height: 56px;
width: 56px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: center;
align-items: center;
padding: 0px 16.0px 0px 16.0px;
`;
export const ButtonDelete2 = styled(GenericCodeButton)`
width: 24px;
height: 24px;
border-radius: 2px;
height: 24px;
`;

export const Content49Row5Column51 = styled.div`
height: 56px;
width: 56px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: center;
align-items: center;
padding: 0px 16.0px 0px 16.0px;
`;
export const InputFormItem25 = styled(GenericFormItem)`
width: 952px;
`;

export const InputLabelVertical11 = styled.div`
height: 30px;
width: 952px;
display: flex;
box-sizing: border-box;
gap: 4.0px;
justify-content: flex-start;
align-items: center;
padding: 0px 0px 8.0px 0px;
`;
export const TextComponent28 = styled(GenericText)`
  font-family: Roboto;
  line-height: 22px;
  color: #F6232E;
  text-align: left;
  margin: 0px;
position: static;
width: 8px;
`;

export const InputLabel25 = styled(GenericText)`
font-family: Roboto;
line-height: 22px;
color: rgba(0, 0, 0, 0.85) ;
text-align: left;
margin: 0px;
position: static;
width: 81px;
`;

export const InputBasic27 = styled((GenericInput))`
width: 952px;
`;

export const Footer1 = styled.div`
height: 54px;
width: 1002px;
display: flex;
border: 1px solid #DADADA;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-end;
align-items: center;
padding: 10.0px 16.0px 10.0px 16.0px;
`;
export const ButtonBack9 = styled(GenericCodeButton)`
  width: 69px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;

export const ButtonApply7 = styled(GenericCodeButton)`
width: 76px;
height: 32px;
border-radius: 2px;
height: 32px;
`;

