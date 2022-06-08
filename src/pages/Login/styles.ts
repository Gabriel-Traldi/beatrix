import styled from 'styled-components'

import LoginImage from './assets/990_132730.png' 
import SunChemicalLogoBlackImage from './assets/990_132732.png' 
import {Form} from 'antd' 
import GenericCodeButton from '../../components/Button'

export const Login = styled.div`
flex-direction: column;
height: 100%;
width: 1920px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;
export const Body = styled.div`
flex-direction: column;
height: 459px;
width: 630px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 32.0px;;
column-gap: 32.0px;;
justify-content: center;
align-items: center;
border-radius: 16px;
  padding: 64.0px 64.0px 64.0px 64.0px;
    padding-top: 64.0px;
    padding-left: 64.0px;
    padding-bottom: 64.0px;
    padding-right: 64.0px;
  background-color: #FFFFFF;
  box-shadow:  0px 9px 17px 0px #DFCFD9 ;
`;
export const SunChemicalLogoBlack = styled.div`
left: 143px;
top: 64px;
position: static;
height: 111px;
width: 344px;
box-sizing: border-box;
  background: url(${SunChemicalLogoBlackImage});
  background-repeat: no-repeat;
`;
export const ViceriForm = styled(Form)`
height: 188px;
width: 313px;
display: flex;
flex-direction: column;
box-sizing: border-box;
row-gap: 16.0px;;
column-gap: 16.0px;;
justify-content: flex-start;
align-items: flex-start;
`;
export const InputFormItem = styled((Form.Item))`
      width: 313px;
    left: 0px;
    top: 0px;
    position: static;
`;

export const InputLabelVertical = styled.div`
height: 22px;
width: 313px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: center;
`;
import GenericText from '../../components/Text'
export const InputLabel = styled(GenericText)`
        margin: 0px;
`;

export const InputFormItem1 = styled((Form.Item))`
    width: 313px;
  left: 0px;
  top: 70px;
  position: static;
`;

export const InputLabelVertical1 = styled.div`
height: 22px;
width: 313px;
display: flex;
flex-direction: row;
box-sizing: border-box;
row-gap: 4.0px;;
column-gap: 4.0px;;
justify-content: flex-start;
align-items: center;
`;
export const InputLabel1 = styled(GenericText)`
      margin: 0px;
    width: 40px;
`;

export const Actions = styled.div`
justify-content: space-between;
height: 32px;
width: 313px;
display: flex;
flex-direction: row;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
`;
export const ButtonsButton = styled(GenericCodeButton)`
  left: 0px;
  top: 5px;
  position: static;
    width: 133px;
    height: 22px;
    border-radius: 2px;
    height: 22px;
`;

export const ButtonsButton1 = styled(GenericCodeButton)`
left: 246px;
top: 0px;
  width: 67px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;

