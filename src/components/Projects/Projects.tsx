import { Empty } from 'antd';
import { useTranslation } from 'react-i18next';

import { SingleRepoModel } from 'api/RepoAPI/Repo.model';

import { useRepoList } from 'hooks/useRepoList';

import { CardProjects } from 'components/CardProjects';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { Spinner } from 'components/Spinner';
import { SectionTitle } from 'components/Typography/SectionTitle';

import * as Styled from './Projects.styles';

export const Projects = () => {
  const { t } = useTranslation();
  const { data: repoList, isLoading: isLoadingRepoList, isError: isErrorRepoList } = useRepoList();

  return (
    <div id="projects">
      <SectionTitle title={t('projects.title')} darkMode />
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <ErrorBoundary>
        <Styled.CardContainer>
          {(() => {
            if (isLoadingRepoList) {
              return <Spinner />;
            }

            if (isErrorRepoList || repoList.length === 0) {
              return <Empty />;
            }

            return (
              <>
                {repoList.map((repo: SingleRepoModel) => (
                  <CardProjects
                    key={repo.id}
                    avatar={repo.owner.avatar_url}
                    title={repo.name}
                    description={repo.description}
                    tags={repo.topics}
                    urlGithub={repo.owner.html_url}
                    urlCode={repo.html_url}
                    urlDemo={repo.homepage}
                  />
                ))}
              </>
            );
          })()}
        </Styled.CardContainer>
      </ErrorBoundary>
    </div>
  );
};
