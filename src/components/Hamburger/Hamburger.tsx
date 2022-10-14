import { useEffect } from 'react';

import * as Styled from './Hamburger.styles';

type HamburgerProps = {
  showMenu: boolean;
  onOpenCloseMenu: () => void;
};

export const Hamburger = ({ showMenu, onOpenCloseMenu }: HamburgerProps) => {
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showMenu]);

  return (
    <Styled.HamburgerButton type="button" onClick={onOpenCloseMenu}>
      <Styled.BarOne open={showMenu} />
      <Styled.BarTwo open={showMenu} />
      <Styled.BarThree open={showMenu} />
    </Styled.HamburgerButton>
  );
};
