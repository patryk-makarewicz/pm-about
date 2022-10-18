import { Divider } from 'antd';

import * as Styled from './Card.styles';

type CardProps = {
  children: React.ReactNode;
  title: string;
};

export const Card = ({ children, title }: CardProps) => (
  <Styled.Wrapper>
    <Styled.LogoBox>{children}</Styled.LogoBox>
    <Divider />
    <Styled.Label>{title}</Styled.Label>
  </Styled.Wrapper>
);
