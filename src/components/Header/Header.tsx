/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Switch } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { modeState } from 'state/appState';

import { useModeLocalStorage } from 'hooks/useModeLocalStorage';

import { Anchor } from 'components/Anchor';
import { Hamburger } from 'components/Hamburger';

import { Logo } from 'utils/logo';
import { useWindowSize } from 'utils/windowSize';

import FlagEn from '../../assets/flag_en.png';
import { ReactComponent as FlagPl } from '../../assets/flag_poland.svg';
import { ReactComponent as ModeDark } from '../../assets/mode_dark.svg';
import { ReactComponent as ModeLight } from '../../assets/mode_light.svg';
import * as Styled from './Header.styles';

export const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const mode = useRecoilValue(modeState);
  const { onChangeMode } = useModeLocalStorage();

  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();

  const onOpenCloseMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [width >= 576]);

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

  const renderFlag = () => {
    if (language === 'en') {
      return <img src={FlagEn} alt="Language flag En" width={24} height={24} style={{ marginLeft: '3px' }} />;
    } else {
      return <FlagPl width={27} height={32} />;
    }
  };

  const paths = [
    {
      href: '#about',
      title: t('header.about'),
    },
    {
      href: '#tech',
      title: t('header.tech'),
    },
    {
      href: '#projects',
      title: t('header.projects'),
    },
    {
      href: '#contact',
      title: t('header.contact'),
    },
  ];

  return (
    <>
      <Styled.Config id="about">
        <Styled.InnerWrapper $justifyEnd>
          <Switch
            checked={mode}
            onChange={onChangeMode}
            style={{ margin: '0 10px' }}
            checkedChildren={<ModeDark style={{ marginTop: '3px' }} />}
            unCheckedChildren={<ModeLight style={{ marginTop: '2px' }} width={18} height={17} />}
          />
          <Button type="text" onClick={onChangeLanguage} style={{ marginLeft: '15px', padding: 0 }}>
            {renderFlag()}
          </Button>
        </Styled.InnerWrapper>
      </Styled.Config>

      <Styled.Header>
        <Styled.InnerWrapper>
          <h1 style={{ margin: 'auto 15px auto 0', display: 'flex' }}>{Logo()}</h1>
          <Anchor paths={paths} />
          <Hamburger showMenu={showMenu} onOpenCloseMenu={onOpenCloseMenu} />
        </Styled.InnerWrapper>
      </Styled.Header>

      <Styled.MobileMenu close={!showMenu}>
        <Anchor paths={paths} onClick={() => setShowMenu(false)} mobile />
      </Styled.MobileMenu>
    </>
  );
};
