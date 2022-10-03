import { SocialMedia } from 'components/SocialMedia/SocialMedia';
import { useTranslation } from 'react-i18next';
import * as Styled from './Contact.styles';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <Styled.SectionTitle>{t('contact.title')}</Styled.SectionTitle>
      <p>I’m open for new opportunities. If you have one for me we should talk!</p>
      <p>FORM</p>
      <SocialMedia />
    </div>
  );
};
