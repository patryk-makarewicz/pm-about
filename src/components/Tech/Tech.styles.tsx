import styled from 'styled-components';
import { fontSize, margin } from 'styles/variables';

export const SectionTitle = styled.h2`
  font-size: ${fontSize.xl};
  margin-bottom: ${margin.xl};
  text-align: center;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
