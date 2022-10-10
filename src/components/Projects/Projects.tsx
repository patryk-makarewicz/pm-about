import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import * as Styled from './Projects.styles';
import React from 'react';
import { useRepoList } from 'hooks/useRepoList';
import { SingleRepoModel } from 'api/RepoAPI/Repo.model';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

export const Projects = () => {
  const { t } = useTranslation();

  const { data: repoList } = useRepoList(true);

  console.log(repoList);

  return (
    <div id="projects">
      <Styled.SectionTitle>{t('projects.title')}</Styled.SectionTitle>
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <Styled.CarouselContainer>
        <Carousel autoplay>
          {repoList.map((repo: SingleRepoModel) => (
            <div key={repo.id}>
              <h3 style={contentStyle}>{repo.name}</h3>
            </div>
          ))}
        </Carousel>
      </Styled.CarouselContainer>
    </div>
  );
};
