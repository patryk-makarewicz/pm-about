import { useTranslation } from 'react-i18next';

import { Card } from 'components/Card';
import { Placeholder } from 'components/Placeholder';
import { SectionTitle } from 'components/Typography/SectionTitle';

import { PhotoLoad } from 'utils/photo';

import { techData } from 'helpers/tech';

import * as Styled from './Tech.styles';

export const Tech = () => {
  const { t } = useTranslation();

  const { onLoad, loaded, refPhoto } = PhotoLoad();

  return (
    <div id="tech">
      <SectionTitle title={t('technologies.title')} />
      <Styled.CardBox>
        {techData.map((tech) => (
          <Card key={tech.id} title={tech.name}>
            <Placeholder hide={loaded} />
            <Styled.Logo src={tech.logo} alt={`${tech.name} logo`} ref={refPhoto} onLoad={onLoad} hide={!loaded} />
          </Card>
        ))}
      </Styled.CardBox>
    </div>
  );
};
