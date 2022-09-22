import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Logo } from '../../assets/logo_dark.svg';
import * as Styled from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Styled.Footer>
      <Styled.Wrapper>
        <Logo title={t('name')} width={120} height={45} />
        <Divider type="vertical" style={{ height: '20px', margin: '0 20px' }} />
        <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};
