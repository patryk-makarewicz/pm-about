import styled, { css } from 'styled-components';

type LogoProps = {
  hide: boolean;
};

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Logo = styled.img<LogoProps>`
  width: 100%;
  height: 100%;
  transition: ease 1s all;
  ${({ hide }) =>
    hide
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;
