import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { modeState } from 'state/appState';
import { useModeLocalStorage } from 'hooks/useModeLocalStorage';

import { useTranslation } from 'react-i18next';
import { Anchor, Button, Switch } from 'antd';

import { ReactComponent as FlagPl } from '../../assets/flag_poland.svg';
import { ReactComponent as ModeDark } from '../../assets/mode_dark.svg';
import { ReactComponent as ModeLight } from '../../assets/mode_light.svg';
import { Logo } from 'Utils/logo';
import FlagEn from '../../assets/flag_en.png';
import * as Styled from './Header.styles';
import { Hamburger } from 'components/Hamburger';

const { Link } = Anchor;

export const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const mode = useRecoilValue(modeState);
  const { onChangeMode } = useModeLocalStorage();

  const [language, setLanguage] = useState('en');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const onChangeLanguage = () => {
    if (language === 'pl') {
      changeLanguage('en');
    } else {
      changeLanguage('pl');
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  const onOpenCloseMenu = () => {
    if (window.innerWidth >= 576) {
      setShowMenu(false);
    } else {
      setShowMenu((prevState) => !prevState);
    }
  };

  // TODO auto zamykanie powyżej 576px

  const renderFlag = () => {
    if (language === 'en') {
      return <img src={FlagEn} alt="Language flag En" width={24} height={24} style={{ marginLeft: '3px' }} />;
    } else {
      return <FlagPl width={30} height={25} />;
    }
  };

  const renderMode = () => {
    if (mode) {
      return <ModeDark />;
    } else {
      return <ModeLight />;
    }
  };

  return (
    <>
      <Styled.Config id="about">
        <Styled.InnerWrapper $justifyEnd>
          <Switch checked={mode} onChange={onChangeMode} size="small" style={{ margin: '0 10px' }} />
          {renderMode()}
          <Button type="text" onClick={onChangeLanguage} style={{ marginLeft: '15px', padding: 0 }}>
            {renderFlag()}
          </Button>
        </Styled.InnerWrapper>
      </Styled.Config>

      <Styled.Header>
        <Styled.InnerWrapper>
          <h1 style={{ margin: 'auto 20px auto 0', display: 'flex' }}>{Logo()}</h1>
          <Styled.Anchor affix={false} targetOffset={95}>
            <Link href="#about" title={t('header.about')} />
            <Link href="#tech" title={t('header.tech')} />
            <Link href="#projects" title={t('header.projects')} />
            <Link href="#contact" title={t('header.contact')} />
          </Styled.Anchor>
          <Hamburger showMenu={showMenu} onOpenCloseMenu={onOpenCloseMenu} />
        </Styled.InnerWrapper>
      </Styled.Header>

      <Styled.MobileMenu close={!showMenu}>
        <Styled.Anchor affix={false} targetOffset={95} onClick={() => setShowMenu(false)} mobile>
          <Link href="#about" title={t('header.about')} />
          <Link href="#tech" title={t('header.tech')} />
          <Link href="#projects" title={t('header.projects')} />
          <Link href="#contact" title={t('header.contact')} />
        </Styled.Anchor>
      </Styled.MobileMenu>
    </>
  );
};
