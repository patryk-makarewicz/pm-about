import { Footer } from 'components/Footer';
import { Header } from '../components/Header';

import * as Styled from './layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Styled.Main>{children}</Styled.Main>
    <Footer />
  </>
);
