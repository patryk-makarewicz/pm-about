import styled from 'styled-components';
import { fontSize, margin } from 'styles/variables';

export const CarouselContainer = styled.div`
  max-width: 500px;
  margin: 40px auto 0;
`;

export const SectionTitle = styled.h2`
  color: var(--text-color);
  font-size: ${fontSize.xl};
  margin-bottom: ${margin.xl};
  text-align: center;
`;

export const Paragraph = styled.p`
  color: var(--text-color);
  text-align: center;
`;
