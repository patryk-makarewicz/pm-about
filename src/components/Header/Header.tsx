import { useTranslation } from 'react-i18next';
import { Anchor, Switch } from 'antd';

import { ReactComponent as Logo } from '../../assets/logo_dark.svg';

import LogoLight from '../../assets/logo_light.svg';
import FlagPl from '../../assets/flag_poland.svg';
import FlagEn from '../../assets/flag_en.png';
import ModeDark from '../../assets/mode_dark.svg';
import ModeLight from '../../assets/mode_light.svg';
import * as Styled from './Header.styles';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modeState } from '../../state/appState';

const { Link } = Anchor;

export const Header = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const mode = useRecoilValue(modeState);
  const setMode = useSetRecoilState(modeState);
  const [language, setLanguage] = useState('en');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const onChangeMode = () => {
    setMode((prev) => !prev);
  };

  const onChangeLanguage = (checked: boolean) => {
    if (checked) {
      changeLanguage('en');
    } else {
      changeLanguage('pl');
    }
  };

  const renderLogo = () => {
    if (!mode) {
      return <Logo width={120} height={45} />;
    } else {
      return <LogoLight alt={t('name')} title={t('name')} width={120} height={45} />;
    }
  };

  const renderFlag = () => {
    if (language === 'en') {
      return <img src={FlagEn.src} alt="Language flag En" width={24} height={24} style={{ marginLeft: '3px' }} />;
    } else {
      return <FlagPl alt="Language flag Pl" width={30} height={25} />;
    }
  };

  const renderMode = () => {
    if (mode) {
      return <ModeDark alt="Mode icon" style={{ marginRight: '20px' }} />;
    } else {
      return <ModeLight alt="Mode icon" style={{ marginRight: '20px' }} />;
    }
  };

  return (
    <>
      <Styled.Config>
        <Styled.InnerWrapper $justifyEnd>
          <Styled.Text>{t('mode')}</Styled.Text>
          <Switch defaultChecked checked={mode} onChange={onChangeMode} size="small" style={{ margin: '0 10px' }} />
          {renderMode()}
          <Styled.Text>{t('language')}</Styled.Text>

          <Switch checked={language === 'en'} onChange={onChangeLanguage} size="small" style={{ margin: '0 10px' }} />
          {renderFlag()}
        </Styled.InnerWrapper>
      </Styled.Config>

      <Styled.Header>
        <Styled.InnerWrapper>
          <h1 style={{ margin: 'auto 20px auto 0', display: 'flex' }}>{renderLogo()}</h1>
          <Styled.Anchor affix={false} targetOffset={95}>
            <Link href="#about" title={t('header.about')} />
            <Link href="#tech" title={t('header.tech')} />
            <Link href="#projects" title={t('header.projects')} />
            <Link href="#contact" title={t('header.contact')} />
          </Styled.Anchor>
        </Styled.InnerWrapper>
      </Styled.Header>
    </>
  );
};
