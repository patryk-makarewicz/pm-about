import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';

import { Logo } from 'utils/logo';

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
        <Styled.LogoWrapper>{Logo()}</Styled.LogoWrapper>
        <Styled.Divider type="vertical" />
        <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
        <Styled.Divider type="vertical" />
        <Button
          type="text"
          style={{ paddingLeft: 0, paddingRight: 0, color: 'var(--text-color)' }}
          onClick={onHandleShowTerms}>
          {t('footer.terms')}
        </Button>
        <Styled.Divider type="vertical" />
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
