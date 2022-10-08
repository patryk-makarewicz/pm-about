import { Divider } from 'antd';
import { Button } from 'components/Button';
import { useTranslation } from 'react-i18next';
import { Logo } from 'Utils/logo';

import * as Styled from './Footer.styles';

type FooterType = {
  onHandleShowTerms: () => void;
  onHandleShowPrivacy: () => void;
};

export const Footer = ({ onHandleShowTerms, onHandleShowPrivacy }: FooterType) => {
  const { t } = useTranslation();

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Styled.Footer>
      <Styled.Wrapper>
        {Logo()}
        <Divider type="vertical" style={{ height: '20px', margin: '0 20px' }} />
        <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
        <Divider type="vertical" style={{ height: '20px', margin: '0 20px' }} />
        <Button
          type="text"
          style={{ paddingLeft: 0, paddingRight: 0, color: 'var(--text-color)' }}
          onClick={onHandleShowTerms}>
          {t('footer.terms')}
        </Button>
        <Divider type="vertical" style={{ height: '20px', margin: '0 20px' }} />
        <Button
          type="text"
          style={{ paddingLeft: 0, paddingRight: 0, color: 'var(--text-color)' }}
          onClick={onHandleShowPrivacy}>
          {t('footer.privacy')}
        </Button>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};
