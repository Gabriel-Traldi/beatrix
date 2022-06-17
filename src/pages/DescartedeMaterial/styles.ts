import styled from 'styled-components';

import { Table } from 'antd';
import GenericCodeButton from '../../components/Button';
import GenericText from '../../components/Text';

export const DescartedeMaterial1 = styled.div`
  height: 100%;
  width: 1664px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #ffffff;
`;
export const PageHeader11 = styled.div`
  height: 74px;
  width: 1664px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 12px 24px 16px 24px;
  background-color: #f1f1f1;
`;
export const Header14 = styled.div`
  height: 46px;
  width: 1616px;
  display: flex;
  box-sizing: border-box;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
`;
export const DescartedeMaterial = styled(GenericText)`
  font-family: Roboto;
  font-weight: 500;
  font-size: 38px;
  line-height: 46px;
  color: #5a5a5a;
  text-align: left;
  margin: 0px;
  position: static;
  width: 1428px;
`;

export const Actions7 = styled.div`
  height: 32px;
  width: 177px;
  display: flex;
  box-sizing: border-box;
  gap: 8px;
  justify-content: flex-end;
  align-items: center;
`;
export const ButtonNewDiscard = styled(GenericCodeButton)`
  width: 177px;
  height: 32px;
  border-radius: 2px;
  height: 32px;
`;

export const Body24 = styled.div`
  height: 100%;
  width: 1664px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  background-color: #f0f0f0;
`;
export const DescartedeMaterialTable = styled(Table)`
  width: 1616px;
`;

export const ColumnDescartedeMaterialTable = styled(Table.Column)`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;
