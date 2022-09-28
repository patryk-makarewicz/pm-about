import { About } from 'components/About';
import { Contact } from 'components/Contact';
import { Projects } from 'components/Projects';
import { Tech } from 'components/Tech';
import { Layout } from 'layout';
import { PageLayout } from 'layout/PageLayout';
import { PageLayoutFull } from 'layout/PageLayoutFull';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modeState } from 'state/appState';

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

  return (
    <div data-theme={darkMode ? 'dark' : 'light'}>
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
  );
};
