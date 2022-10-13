import { ButtonProps as AntdButtonProps } from 'antd';

import * as Styled from './Button.styles';

type ButtonProps = {
  children?: React.ReactNode;
  $marginBottom?: string;
  $minWidth?: string;
  $textColor?: string;
};

export type ButtonComponentProps = AntdButtonProps & ButtonProps;

export const Button = ({ children, ...props }: ButtonComponentProps) => (
  <Styled.Button type="primary" {...props}>
    {children}
  </Styled.Button>
);
