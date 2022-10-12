import { useTranslation } from 'react-i18next';
import { useRepoList } from 'hooks/useRepoList';
import { SingleRepoModel } from 'api/RepoAPI/Repo.model';

import * as Styled from './Projects.styles';

export const Projects = () => {
  const { t } = useTranslation();
  const { data: repoList } = useRepoList(true);

  return (
    <div id="projects">
      <Styled.SectionTitle>{t('projects.title')}</Styled.SectionTitle>
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <Styled.CarouselContainer>
        <Styled.Carousel autoplay>
          {repoList.map((repo: SingleRepoModel) => (
            <Styled.ItemContainer key={repo.id}>
              <p style={{ height: '10px', marginTop: '-35px' }}>
                {t('projects.project')}: {repo.name}
              </p>
              <p style={{ height: '10px' }}>
                {t('projects.projectDescription')}: {repo.description}
              </p>
              <p>
                {t('projects.projectTags')}: {repo.topics.map((tag) => tag)}
              </p>
            </Styled.ItemContainer>
          ))}
        </Styled.Carousel>
      </Styled.CarouselContainer>
    </div>
  );
};
