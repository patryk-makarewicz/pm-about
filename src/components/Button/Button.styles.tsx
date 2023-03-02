import { Button as AntdButton } from 'antd';
import styled, { css } from 'styled-components';

interface ButtonProps {
  $marginBottom?: string;
  $minWidth?: string;
  $textColor?: string;
}

export const Button: typeof AntdButton = styled(AntdButton)<ButtonProps>`
  &&&,
  &.ant-btn {
    border-radius: 2px;
  }

  &&&.ant-btn-text {
    ${({ $textColor }) =>
      $textColor &&
      css`
        color: ${$textColor};
      `}
  }

  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}
  ${({ $minWidth }) =>
    $minWidth &&
    css`
      min-width: ${$minWidth};
    `}
`;
