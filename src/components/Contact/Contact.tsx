import { useTranslation } from 'react-i18next';
import * as Styled from './Contact.styles';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact">
      <Styled.SectionTitle>{t('contact.title')}</Styled.SectionTitle>
      <p>I’m open for new opportunities. If you have one for me we should talk!</p>
      <p>FORM</p>
      <div>
        <div>
          <a href="https://github.com/patryk-makarewicz" target="_blank">
            <img src="../assets/img/github.svg" alt="Link to Github" title="Link to Github" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/patryk-makarewicz/" target="_blank">
            <img src="../assets/img/linkedin.svg" alt="Link to LinkedIn" title="Link to LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};
