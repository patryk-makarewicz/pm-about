import { useTranslation } from 'react-i18next';
import { useRepoList } from 'hooks/useRepoList';
import { SingleRepoModel } from 'api/RepoAPI/Repo.model';

import * as Styled from './Projects.styles';
import { SectionTitle } from 'components/Typography/SectionTitle';
import { CardProjects } from 'components/CardProjects';

export const Projects = () => {
  const { t } = useTranslation();
  const { data: repoList } = useRepoList(true);

  return (
    <div id="projects">
      <SectionTitle title={t('projects.title')} darkMode />
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <Styled.CardContainer>
        {repoList.map((repo: SingleRepoModel) => (
          <CardProjects key={repo.id} title={repo.name} description={repo.description} tags={repo.topics} />
        ))}
      </Styled.CardContainer>
    </div>
  );
};
