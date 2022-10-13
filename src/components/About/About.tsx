import { useTranslation } from 'react-i18next';
import Me from '../../assets/me.jpg';

import * as Styled from './About.styles';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Greeting>
        <Styled.Cloud>
          {t('greeting.hi')} <Styled.Hand>🖐</Styled.Hand>
        </Styled.Cloud>
        <Styled.Photo src={Me} alt="Me" title="Patryk Makarewicz" />
      </Styled.Greeting>
      <Styled.Text $marginBottom="10px">
        {t('greeting.dev')} <Styled.TextGreen>{t('greeting.devGreen')}</Styled.TextGreen>
      </Styled.Text>
      <Styled.Text $marginBottom="20px">{t('greeting.content')} 😊.</Styled.Text>
      <SocialMedia />
    </Styled.Wrapper>
  );
};
