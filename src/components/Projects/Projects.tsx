import { useTranslation } from 'react-i18next';
import * as Styled from './Projects.styles';

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <div id="projects">
      <Styled.SectionTitle>{t('projects.title')}</Styled.SectionTitle>
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
    </div>
  );
};
