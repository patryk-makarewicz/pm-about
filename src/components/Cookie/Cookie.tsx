import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CookieConsent from 'react-cookie-consent';

import styles from './Cookie.module.scss';
import { CloseOutlined } from '@ant-design/icons';

type CookieType = {
  onHandleShowTerms: () => void;
};

const Cookie = ({ onHandleShowTerms }: CookieType) => {
  const { t } = useTranslation();
  const [showCookieBar, setShowCookieBar] = useState(true);

  return (
    <>
      {showCookieBar && (
        <CookieConsent
          location="bottom"
          buttonText={t('cookie.button')}
          cookieName="Cookie"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#242424',
            background: '#FFFFFF',
            textAlign: 'center',
            paddingRight: '40px',
            paddingLeft: '20px',
            fontSize: '16px',
            borderTop: '1px solid #389e0d'
          }}
          buttonStyle={{
            background: '#389e0d',
            color: 'white',
            fontSize: '16px',
            borderRadius: '6px',
            fontFamily: 'Poppins'
          }}>
          {t('cookie.text')}
          <button className={styles.cookie__buttonTerm} type="button" onClick={() => onHandleShowTerms()}>
            {t('cookie.textButton')}
          </button>
          <button className={styles.cookie__buttonClose} type="button" onClick={() => setShowCookieBar(!showCookieBar)}>
            <CloseOutlined />
          </button>
        </CookieConsent>
      )}
    </>
  );
};

export default Cookie;
