import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  border-top: 1px solid ${colors.gray};
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.2);
  background-color: white;
  position: relative;
  top: 0;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  padding: 0 10px;
  margin: auto;
  height: 100%;
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: 12px;
`;
