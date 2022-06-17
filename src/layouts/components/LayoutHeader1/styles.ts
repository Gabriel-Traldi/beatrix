import styled from 'styled-components'

import GenericCodeButton from '../../../components/Button'
import InkControlSymbolImage from './assets/979_114568.png' 
import IconOutlinedUserImage from './assets/979_114575.png' 
import VectorComponenticonoutlineddirImage from './assets/I979_114576_180_40425.png' 

export const LayoutHeader = styled.div`
height: 64px;
width: 1664px;
display: flex;
box-sizing: border-box;
justify-content: center;
align-items: center;
`;
export const Header = styled.div`
justify-content: space-between;
height: 64px;
width: 1664px;
display: flex;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
  padding: 24.0px;
  background-color: #FFFFFF;
`;
export const Wrapper = styled.div`
height: 32px;
width: 175px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: flex-start;
align-items: center;
`;
export const ButtonsButton4 = styled(GenericCodeButton)`
        width: 32px;
        height: 32px;
        border-radius: 2px;
        height: 32px;
`;

export const InkControlSymbol = styled.div`
height: 23px;
width: 127px;
  background-color: #EF3526;
  background: url(${InkControlSymbolImage});
  background-repeat: no-repeat;
`;
export const Actions = styled.div`
height: 32px;
width: 261px;
display: flex;
box-sizing: border-box;
gap: 16.0px;
justify-content: flex-start;
align-items: center;
`;
export const ButtonsButton5 = styled(GenericCodeButton)`
      width: 34px;
      height: 32px;
      border-radius: 2px;
      height: 32px;
`;

export const Notifications = styled(GenericCodeButton)`
    width: 32px;
    height: 32px;
    border-radius: 2px;
    height: 32px;
`;

export const Frame43 = styled.div`
height: 32px;
width: 163px;
display: flex;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-start;
align-items: center;
`;
export const Avatar = styled.div`
height: 32px;
width: 32px;
box-sizing: border-box;
border-radius: 96px;
`;
export const Rectangle3 = styled.div`
height: 32px;
width: 32px;
left: 0px;
top: 0px;
position: absolute;
box-sizing: border-box;
  background-color: #C0C0C0;
`;
export const IconOutlinedUser = styled.div`
height: 18px;
width: 18px;
left: 7px;
top: 7px;
position: absolute;
box-sizing: border-box;
  background: url(${IconOutlinedUserImage});
  background-repeat: no-repeat;
`;
export const InstanceComponentdropdowntrigger = styled.div`
height: 22px;
width: 123px;
display: flex;
box-sizing: border-box;
gap: 2.0px;
justify-content: flex-start;
align-items: center;
`;
import GenericText from '../../../components/Text'
export const Dropdown = styled(GenericText)`
    font-family: Roboto;
    line-height: 22px;
    color: #2C292B;
    text-align: left;
    margin: 0px;
  position: static;
  width: 110px;
`;

export const VectorComponenticonoutlineddir = styled.div`
height: 12px;
width: 12px;
box-sizing: border-box;
  background: url(${VectorComponenticonoutlineddirImage});
  background-repeat: no-repeat;
`;
