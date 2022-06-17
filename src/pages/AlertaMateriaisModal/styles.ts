import styled from 'styled-components'

import GenericCodeButton from '../../components/Button'
import {Table} from 'antd'

export const AlertaMateriaisModal = styled.div`
height: 370px;
width: 1000px;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: flex-start;
align-items: flex-start;
border-radius: 2px;
  background-color: #FFFFFF;
`;
export const Header17 = styled.div`
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
export const Title160 = styled.div`
height: 24px;
width: 912px;
display: flex;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-start;
align-items: center;
`;
export const ButtonClose10 = styled(GenericCodeButton)`
    width: 32px;
    height: 32px;
    border-radius: 2px;
    height: 32px;
`;

export const Body29 = styled.div`
height: 254px;
width: 1000px;
display: flex;
flex-direction: column;
box-sizing: border-box;
gap: 16.0px;
justify-content: flex-start;
align-items: center;
padding: 24.0px;
`;
export const Row011 = styled.div`
height: 22px;
width: 952px;
display: flex;
box-sizing: border-box;
gap: 8.0px;
justify-content: flex-start;
align-items: flex-start;
`;
import GenericText from '../../components/Text'
export const TextComponentforam = styled(GenericText)`
      font-family: Roboto;
      line-height: 22px;
      color: #000000;
      text-align: left;
      margin: 0px;
    position: static;
    width: 953px;
`;

export const AlertaMateriaisTable = styled((Table))`
  width: 952px;
`;

export const ColumnAlertaMateriaisTable = styled((Table.Column))`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

export const Footer2 = styled.div`
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
export const ButtonBack8 = styled(GenericCodeButton)`
  width: 69px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;

export const ButtonApply6 = styled(GenericCodeButton)`
width: 122px;
height: 32px;
border-radius: 2px;
height: 32px;
`;

