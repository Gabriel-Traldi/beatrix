import styled from 'styled-components';

import { Table } from 'antd';
import GenericCodeButton from '../../components/Button';
import GenericText from '../../components/Text';

export const AlertaMateriaisModal = styled.div`
  height: 370px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 2px;
  background-color: #ffffff;
`;
export const Header17 = styled.div`
  height: 64px;
  width: 1000px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 24px 16px 24px;
  background-color: #000d18;
`;
export const Title160 = styled.div`
  height: 24px;
  width: 912px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
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
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  padding: 24px;
`;
export const Row011 = styled.div`
  height: 22px;
  width: 952px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const TextComponentforam = styled(GenericText)`
  font-family: Roboto;
  line-height: 22px;
  color: #000000;
  text-align: left;
  margin: 0px;
  position: static;
  width: 953px;
`;

export const AlertaMateriaisTable = styled(Table)`
  width: 952px;
`;

export const ColumnAlertaMateriaisTable = styled(Table.Column)`
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
  border: 1px solid #dadada;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 16px 10px 16px;
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
