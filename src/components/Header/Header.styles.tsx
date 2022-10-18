import { Anchor as AntdAnchor } from 'antd';
import styled, { css } from 'styled-components';

import { colors } from '../../styles/colors';
import { breakpoint, fontSize, shadow, zIndex } from '../../styles/variables';

type InnerWrapperProps = {
  $justifyEnd?: boolean;
};

type MenuProps = {
  close: boolean;
};

type AnchorProps = {
  mobile?: boolean;
};

export const Config = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid ${colors.green};
  background-color: var(--background-color);
  z-index: ${zIndex.header};
`;

export const InnerWrapper = styled.nav<InnerWrapperProps>`
  display: flex;
  align-items: center;
  ${({ $justifyEnd }) =>
    $justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : css`
          justify-content: space-between;
        `}
  max-width: 1440px;
  padding: 0 10px;
  margin: auto;
  height: 100%;

  @media screen and (min-width: ${breakpoint.s}) {
    ${({ $justifyEnd }) =>
      $justifyEnd
        ? css`
            justify-content: flex-end;
          `
        : css`
            justify-content: flex-start;
          `}
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--border-color);
  box-shadow: ${shadow.first};
  background-color: var(--background-color);
  position: sticky;
  top: 0px;
  z-index: ${zIndex.header};
`;

export const Anchor = styled(AntdAnchor)<AnchorProps>`
  ${({ mobile }) =>
    mobile
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}

  @media screen and (min-width: ${breakpoint.s}) {
    ${({ mobile }) =>
      mobile
        ? css`
            display: none;
          `
        : css`
            display: flex;
          `}
  }

  .ant-anchor {
    display: flex;
    ${({ mobile }) =>
      mobile &&
      css`
        flex-direction: column;
      `}
  }
  .ant-anchor-ink {
    ${({ mobile }) =>
      mobile &&
      css`
        display: none;
      `}
  }

  .ant-anchor-link-title {
    color: var(--text-color);
    ${({ mobile }) =>
      mobile &&
      css`
        margin-bottom: 20px;
        font-size: ${fontSize.l};
      `}
  }
  .ant-anchor-link-active > .ant-anchor-link-title {
    color: ${colors.green};
  }
`;

export const MobileMenu = styled.div<MenuProps>`
  background-color: var(--background-color);
  color: var(--text-color);
  position: fixed;
  top: 35px;
  left: auto;
  min-width: 100%;
  min-height: 100%;
  transition: all 0.2s ease-out;
  z-index: ${zIndex.mobileMenu};
  overflow: hidden;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${({ close }) =>
    close
      ? css`
          right: -100%;
          visibility: hidden;
        `
      : css`
          right: 0;
          visibility: visible;
        `}
`;
