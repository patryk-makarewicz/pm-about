import styled from 'styled-components';
import { fontSize } from 'styles/variables';

export const Footer = styled.footer`
  width: 100%;
  height: 60px;
  border-top: 1px solid var(--border-color);
  box-shadow: 0px -2px 12px rgba(0, 0, 0, 0.2);
  background-color: var(--background-color);
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
  color: var(--text-color);
  font-size: ${fontSize.s};
  margin: 0;
`;
