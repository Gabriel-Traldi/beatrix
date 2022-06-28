import styled from 'styled-components';

import GenericCodeButton from '../../../../components/Button';
import GenericText from '../../../../components/Text';

export const LayoutHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 64px;
  width: 100%;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  padding: 24px;
  background-color: #ffffff;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;

  height: 32px;
  width: 175px;
`;
export const ButtonsButton4 = styled(GenericCodeButton)`
  border-radius: 2px;
`;

export const InkControlSymbol = styled.div`
  height: 23px;
  width: 127px;
  background-color: #ef3526;
  background-repeat: no-repeat;
`;
export const Actions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  width: 261px;
`;

export const Frame43 = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  height: 32px;
  width: 163px;
`;

export const Avatar = styled.div`
  height: 32px;
  width: 32px;

  border-radius: 96px;
`;
export const Rectangle3 = styled.div`
  height: 32px;
  width: 32px;
  left: 0px;
  top: 0px;
  position: absolute;

  background-color: #c0c0c0;
`;

export const IconOutlinedUser = styled.div`
  height: 18px;
  width: 18px;
  left: 7px;
  top: 7px;
  position: absolute;

  background-repeat: no-repeat;
`;
export const InstanceComponentdropdowntrigger = styled.div`
  height: 22px;
  width: 123px;
  display: flex;

  gap: 2px;
  justify-content: flex-start;
  align-items: center;
`;

export const Dropdown = styled(GenericText)`
  line-height: 22px;
  color: #2c292b;
  text-align: left;
  margin: 0px;
  position: static;
  width: 110px;
`;

export const VectorComponenticonoutlineddir = styled.div`
  height: 12px;
  width: 12px;

  background-repeat: no-repeat;
`;
