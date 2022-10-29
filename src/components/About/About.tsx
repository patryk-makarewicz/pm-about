import { useTranslation } from 'react-i18next';

import { Placeholder } from 'components/Placeholder';
import { SocialMedia } from 'components/SocialMedia/SocialMedia';

import { PhotoLoad } from 'utils/photo';

import Me from '../../assets/me.jpg';
import * as Styled from './About.styles';

export const About = () => {
  const { t } = useTranslation();

  const { onLoad, loaded, refImage } = PhotoLoad();

  return (
    <Styled.Wrapper>
      <Styled.Greeting>
        <Styled.Cloud>
          {t('greeting.hi')} <Styled.Hand>🖐</Styled.Hand>
        </Styled.Cloud>
        <Styled.Box>
          <Placeholder hide={loaded} />
          <Styled.Photo src={Me} alt="Me" title="Patryk Makarewicz" ref={refImage} onLoad={onLoad} hide={!loaded} />
        </Styled.Box>
      </Styled.Greeting>
      <Styled.Text $marginBottom="10px">
        {t('greeting.dev')} <Styled.TextGreen>{t('greeting.devGreen')}</Styled.TextGreen>
      </Styled.Text>
      <Styled.Text $marginBottom="20px">{t('greeting.content')} 😊.</Styled.Text>
      <SocialMedia />
    </Styled.Wrapper>
  );
};
