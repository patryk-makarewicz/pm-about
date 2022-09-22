import * as Styled from './PageLayout.styles';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <Styled.PageLayout>{children}</Styled.PageLayout>;
};

// type Props = {
//   children: ReactNode;
//   header: ReactNode;
// };

// const PageContent = ({ children, header }: Props) => (
//   <>
//     <Styled.PageHeaderContainer>{header}</Styled.PageHeaderContainer>
//     <Styled.PageContent>
//       <Styled.Content>{children}</Styled.Content>
//     </Styled.PageContent>
//   </>
// );

// export default PageContent;
