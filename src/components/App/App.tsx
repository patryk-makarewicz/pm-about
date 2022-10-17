import { LandingPage } from 'pages/LandingPage';
import { useRecoilValue } from 'recoil';
import { modeState } from 'state/appState';

import GlobalStyles from 'styles/GlobalStyles';

export const App = () => {
  const mode = useRecoilValue(modeState);

  return (
    <>
      <GlobalStyles />
      <div data-theme={mode ? 'dark' : 'light'}>
        <LandingPage />
      </div>
    </>
  );
};
