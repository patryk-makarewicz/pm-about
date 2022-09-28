import { Divider } from 'antd';
import * as Styled from './Card.styles';

type CardProps = {
  children: React.ReactNode;
  title: string;
};

export const Card = ({ children, title }: CardProps) => (
  <Styled.Wrapper>
    <div>{children}</div>
    <Divider />
    <div>{title}</div>
  </Styled.Wrapper>
);
