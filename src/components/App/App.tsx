import { Button } from 'antd';
import { Header } from 'components/Header';
import { PageLayout } from 'layout/PageLayout';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { modeState } from 'state/appState';

export const App = () => {
  const [darkMode, setDarkMode] = useRecoilState(modeState);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('projects_dark_mode') === 'true';
      setDarkMode(storedDarkMode);
    }
  }, []);
  useEffect(() => {
    const BooleanMode = darkMode.toString();
    localStorage.setItem('projects_dark_mode', BooleanMode);
  }, [darkMode]);

  return (
    <RecoilRoot>
      <div data-theme={darkMode ? 'dark' : 'light'}>
        <Header />
        <PageLayout>
          <h1>Hello World!</h1>
          <Button type="primary">TEST</Button>
        </PageLayout>
      </div>
    </RecoilRoot>
  );
};
