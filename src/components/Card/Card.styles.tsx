import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fontWeight, shadow } from 'styles/variables';

export const Wrapper = styled.div`
  color: ${colors.black};
  background-color: ${colors.white};
  margin: 10px;
  width: 140px;
  font-weight: ${fontWeight.semiBold};
  border: 1px solid #dddada;
  box-shadow: ${shadow.first};
`;

export const LogoBox = styled.div`
  margin: 0 auto;
  padding: 30px 0 10px 0;
  width: 50px;
  height: 90px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 0 20px 0;
  height: 50px;
  font-weight: 400;
`;
