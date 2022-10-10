import { Carousel } from 'antd';
import { useTranslation } from 'react-i18next';
import * as Styled from './Projects.styles';
import React from 'react';
import { useRepoList } from 'hooks/useRepoList';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
};

export const Projects = () => {
  const { t } = useTranslation();

  const { data: repoList } = useRepoList();

  console.log(repoList);

  return (
    <div id="projects">
      <Styled.SectionTitle>{t('projects.title')}</Styled.SectionTitle>
      <Styled.Paragraph>{t('projects.description')}</Styled.Paragraph>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};
