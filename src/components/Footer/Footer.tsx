import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { Logo } from 'Utils/logo';

import * as Styled from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();

  const date = new Date();
  const year = date.getFullYear();

  return (
    <Styled.Footer>
      <Styled.Wrapper>
        {Logo()}
        <Divider type="vertical" style={{ height: '20px', margin: '0 20px' }} />
        <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};
