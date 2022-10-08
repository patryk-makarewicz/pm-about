import Cookie from 'components/Cookie/Cookie';
import { Footer } from 'components/Footer';
import { Regulations } from 'components/Regulations';
import { useState } from 'react';
import { Header } from '../components/Header';

import * as Styled from './layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const onHandleShowTerms = () => {
    setShowTerms(!showTerms);
  };
  const onHandleShowPrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };
  const onHandleCloseBoxRegulation = () => {
    setShowTerms(false);
    setShowPrivacy(false);
  };
  return (
    <>
      <Cookie onHandleShowTerms={onHandleShowTerms} />
      {(showTerms || showPrivacy) && (
        <Regulations
          showPrivacy={showPrivacy}
          showTerms={showTerms}
          onHandleCloseBoxRegulation={onHandleCloseBoxRegulation}
        />
      )}
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer onHandleShowTerms={onHandleShowTerms} onHandleShowPrivacy={onHandleShowPrivacy} />
    </>
  );
};
