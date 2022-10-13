import { useTranslation } from 'react-i18next';
import { useRepoList } from 'hooks/useRepoList';
import { SingleRepoModel } from 'api/RepoAPI/Repo.model';
import { Empty } from 'antd';
import { SectionTitle } from 'components/Typography/SectionTitle';
import { CardProjects } from 'components/CardProjects';

import * as Styled from './Projects.styles';
import { Spinner } from 'components/Spinner';

export const Projects = () => {
  const { t } = useTranslation();
  const { data: repoList, isLoading: isLoadingRepoList, isError: isErrorRepoList } = useRepoList(true);

  return (
    <div id="projects">
      <SectionTitle title={t('projects.title')} darkMode />
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <Styled.CardContainer>
        {isLoadingRepoList && <Spinner />}

        {(isErrorRepoList || repoList.length === 0) && <Empty />}

        {repoList.map((repo: SingleRepoModel) => (
          <CardProjects
            key={repo.id}
            avatar={repo.owner.avatar_url}
            title={repo.name}
            description={repo.description}
            tags={repo.topics}
            urlGithub={repo.owner.html_url}
            urlCode={repo.html_url}
          />
        ))}
      </Styled.CardContainer>
    </div>
  );
};
