import styled from 'styled-components'

import LoginImage from './assets/990_132730.png' 
import SunChemicalLogoBlackImage from './assets/990_132732.png' 
import {Form} from 'antd' 
import GenericCodeButton from '../../components/Button'

export const Login = styled.div`
height: 100%;
width: 1920px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;
export const Body1 = styled.div`
height: 459px;
width: 630px;
display: flex;
flex-direction: column;
box-sizing: border-box;
gap: 32.0px;
justify-content: center;
align-items: center;
border-radius: 16px;
  padding: 64.0px;
  background-color: #FFFFFF;
  box-shadow:    17px  #DFCFD9;
`;
export const SunChemicalLogoBlack = styled.div`
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
gap: 16.0px;
justify-content: flex-start;
align-items: flex-start;
`;
export const Actions1 = styled.div`
justify-content: space-between;
height: 32px;
width: 313px;
display: flex;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
`;
export const ButtonsButton = styled(GenericCodeButton)`
  position: static;
    width: 133px;
    height: 22px;
    border-radius: 2px;
    height: 22px;
`;

export const ButtonsButton1 = styled(GenericCodeButton)`
  width: 67px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;

