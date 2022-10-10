import { About } from 'components/About';
import { Contact } from 'components/Contact';
import { Projects } from 'components/Projects';
import { Tech } from 'components/Tech';

import { Layout } from 'layout';
import { PageLayout } from 'layout/PageLayout';
import { PageLayoutFull } from 'layout/PageLayoutFull';
import { useRecoilValue } from 'recoil';
import { modeState } from 'state/appState';

import GlobalStyles from 'styles/GlobalStyles';

export const App = () => {
  const mode = useRecoilValue(modeState);

  return (
    <>
      <GlobalStyles />
      <div data-theme={mode ? 'dark' : 'light'}>
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
