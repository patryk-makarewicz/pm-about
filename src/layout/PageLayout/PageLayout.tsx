import * as Styled from './PageLayout.styles';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <Styled.PageLayout>{children}</Styled.PageLayout>;
};
