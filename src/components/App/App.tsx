import { About } from 'components/About';
import { Contact } from 'components/Contact';
import Cookie from 'components/Cookie/Cookie';
import { Projects } from 'components/Projects';
import { Regulations } from 'components/Regulations';

import { Tech } from 'components/Tech';
import { Layout } from 'layout';
import { PageLayout } from 'layout/PageLayout';
import { PageLayoutFull } from 'layout/PageLayoutFull';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { modeState } from 'state/appState';
import GlobalStyles from 'styles/GlobalStyles';

export const App = () => {
  const [darkMode, setDarkMode] = useRecoilState(modeState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('projects_dark_mode') === 'true';
      setDarkMode(storedDarkMode);
    }
  }, [setDarkMode]);

  useEffect(() => {
    const BooleanMode = darkMode.toString();
    localStorage.setItem('projects_dark_mode', BooleanMode);
  }, [darkMode]);

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
      <GlobalStyles />
      <div data-theme={darkMode ? 'dark' : 'light'}>
        <Cookie onHandleShowTerms={onHandleShowTerms} />
        {(showTerms || showPrivacy) && (
          <Regulations
            showPrivacy={showPrivacy}
            showTerms={showTerms}
            onHandleCloseBoxRegulation={onHandleCloseBoxRegulation}
          />
        )}
        <Layout>
          <PageLayout>
            <About />
          </PageLayout>
          <PageLayoutFull>
            <PageLayout>
              <Tech />
            </PageLayout>
          </PageLayoutFull>
          <PageLayout>
            <Projects />
          </PageLayout>
          <PageLayoutFull>
            <PageLayout>
              <Contact />
            </PageLayout>
          </PageLayoutFull>
        </Layout>
      </div>
    </>
  );
};
