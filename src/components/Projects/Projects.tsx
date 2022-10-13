import { useTranslation } from 'react-i18next';
import { Tag } from 'antd';
import { useRepoList } from 'hooks/useRepoList';
import { SingleRepoModel } from 'api/RepoAPI/Repo.model';

import * as Styled from './Projects.styles';
import { SectionTitle } from 'components/Typography/SectionTitle';

export const Projects = () => {
  const { t } = useTranslation();
  const { data: repoList } = useRepoList(true);

  return (
    <div id="projects">
      <SectionTitle title={t('projects.title')} darkMode />
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <Styled.CarouselContainer>
        <Styled.Carousel autoplay>
          {repoList.map((repo: SingleRepoModel) => (
            <Styled.ItemContainer key={repo.id}>
              <p style={{ height: '10px', marginTop: '-25px' }}>
                {t('projects.project')}: {repo.name}
              </p>
              <p style={{ height: '10px' }}>
                {t('projects.projectDescription')}: {repo.description}
              </p>
              <p>
                {t('projects.projectTags')}:{' '}
                {repo.topics.map((tag, idx) => (
                  <Tag key={idx} color="#389e0d">
                    {tag}
                  </Tag>
                ))}
              </p>
            </Styled.ItemContainer>
          ))}
        </Styled.Carousel>
      </Styled.CarouselContainer>
    </div>
  );
};
