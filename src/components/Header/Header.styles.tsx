import styled, { css } from 'styled-components';
import { Anchor as AntdAnchor } from 'antd';
import { colors } from '../../styles/colors';
import { fontSize, shadow } from '../../styles/variables';

interface InnerWrapperProps {
  $justifyEnd?: boolean;
}

export const Config = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid ${colors.green};
  background-color: var(--background-color);
`;

export const InnerWrapper = styled.nav<InnerWrapperProps>`
  display: flex;
  align-items: center;
  max-width: 1440px;
  padding: 0 10px;
  margin: auto;
  height: 100%;
  ${({ $justifyEnd }) =>
    $justifyEnd
      ? css`
          justify-content: flex-end;
        `
      : ``}
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--border-color);
  box-shadow: ${shadow.first};
  background-color: var(--background-color);
  position: sticky;
  top: 0px;
  z-index: 1;
`;

export const Anchor = styled(AntdAnchor)`
  .ant-anchor {
    display: flex;
  }
  .ant-anchor-link-title {
    color: var(--text-color);
  }
  .ant-anchor-link-active > .ant-anchor-link-title {
    color: ${colors.green};
  }
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: ${fontSize.s};
  margin: 0;
`;
