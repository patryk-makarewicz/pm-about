import styled, { css } from 'styled-components';
import { Anchor as AntdAnchor } from 'antd';
import { colors } from '../../styles/colors';
import { breakpoint, fontSize, fontWeight } from '../../styles/variables';

type AnchorProps = {
  mobile?: boolean;
};

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
    font-size: ${fontSize.m};
    font-weight: ${fontWeight.regular};
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
