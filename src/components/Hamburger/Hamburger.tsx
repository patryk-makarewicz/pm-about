import { useEffect, useState } from 'react';

import * as Styled from './Hamburger.styles';

export const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleOpenMenu = () => {
    if (window.innerWidth >= 1200) {
      setShowMenu(false);
    } else {
      setShowMenu(!showMenu);
    }
  };
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showMenu]);
  return (
    <Styled.HamburgerButton type="button" onClick={handleOpenMenu}>
      <Styled.BarOne open={showMenu} />
      <Styled.BarTwo open={showMenu} />
      <Styled.BarThree open={showMenu} />
    </Styled.HamburgerButton>
  );
};
