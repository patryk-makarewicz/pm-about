import { useRecoilValue } from 'recoil';
import { modeState } from 'state/appState';

import { ReactComponent as LogoDark } from '../assets/logo_dark.svg';
import { ReactComponent as LogoWhite } from '../assets/logo_light.svg';

export const Logo = () => {
  const mode = useRecoilValue(modeState);

  if (!mode) {
    return <LogoDark width={120} height={45} />;
  } else {
    return <LogoWhite width={120} height={45} />;
  }
};
