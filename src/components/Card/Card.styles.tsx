import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fontWeight } from 'styles/variables';

export const Wrapper = styled.div`
  color: ${colors.black};
  background-color: ${colors.white};
  padding: 20px 0;
  margin: 10px;
  width: 130px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-weight: ${fontWeight.semiBold};
  border: 1px solid #dddada;
`;
