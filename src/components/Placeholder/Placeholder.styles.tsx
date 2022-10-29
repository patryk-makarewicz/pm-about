import styled, { css } from 'styled-components';
import { colors } from 'styles';

type PlaceholderProps = {
  hide: boolean;
};

export const Placeholder = styled.div<PlaceholderProps>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${colors.gray};
  transition: ease 1s all;
  ${({ hide }) =>
    hide
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;
