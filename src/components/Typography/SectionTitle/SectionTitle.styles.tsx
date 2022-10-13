import styled, { css } from 'styled-components';
import { colors, fontSize, margin } from 'styles';

type SectionTitleType = {
  darkMode?: boolean;
};

export const SectionTitle = styled.h2<SectionTitleType>`
  ${({ darkMode }) =>
    darkMode
      ? css`
          color: var(--text-color);
        `
      : css`
          color: ${colors.black};
        `}
  font-size: ${fontSize.xl};
  margin-bottom: ${margin.xl};
  text-align: center;
  font-weight: 600;
`;
