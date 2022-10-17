import { useRecoilValue } from 'recoil';
import { modeState } from 'state/appState';

import { ReactComponent as LogoDark } from '../assets/logo_black.svg';
import { ReactComponent as LogoWhite } from '../assets/logo_white.svg';

export const Logo = () => {
  const mode = useRecoilValue(modeState);

  if (!mode) {
    return <LogoDark width={35} height={40} />;
  } else {
    return <LogoWhite width={35} height={40} />;
  }
};
