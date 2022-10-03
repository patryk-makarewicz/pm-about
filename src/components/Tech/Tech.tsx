import { Card } from 'components/Card';
import { techData } from 'helpers/tech';
import { useTranslation } from 'react-i18next';

import * as Styled from './Tech.styles';

export const Tech = () => {
  const { t } = useTranslation();

  return (
    <div id="tech">
      <Styled.SectionTitle>{t('technologies.title')}</Styled.SectionTitle>
      <Styled.CardBox>
        {techData.map((tech) => (
          <Card key={tech.id} title={tech.name}>
            <Styled.Logo src={tech.logo} alt={`${tech.name} logo`} />
          </Card>
        ))}
      </Styled.CardBox>
    </div>
  );
};
