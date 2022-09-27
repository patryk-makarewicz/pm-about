import { useTranslation } from 'react-i18next';
import { Row, Space } from 'antd';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import Me from '../../assets/me.jpg';

import * as Styled from './About.styles';

export const About = () => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper id="about">
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

      <Row justify="center">
        <Space>
          <Styled.ButtonIcon
            href="https://www.linkedin.com/in/patryk-makarewicz/"
            target="_blank"
            title="Go to LinkedIn">
            <LinkedIn width={36} height={36} />
          </Styled.ButtonIcon>
          <Styled.ButtonIcon href="https://github.com/patryk-makarewicz" target="_blank" title="Go to Github">
            <Github width={36} height={36} />
          </Styled.ButtonIcon>
        </Space>
      </Row>
    </Styled.Wrapper>
  );
};
