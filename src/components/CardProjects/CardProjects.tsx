import { BranchesOutlined, CodeOutlined, DesktopOutlined } from '@ant-design/icons';
import { Avatar, Tag, Card, CardProps } from 'antd';

import { Button } from 'components/Button';

import { PhotoLoad } from 'utils/photo';

import * as Styled from './CardProjects.styles';

const { Meta } = Card;

type CardProjectsProps = {
  avatar: string;
  title: string;
  description: string;
  tags: string[];
  urlGithub: string;
  urlCode: string;
  urlDemo: string;
};

type Props = CardProjectsProps & CardProps;

export const CardProjects = ({ avatar, title, description, tags, urlGithub, urlCode, urlDemo, ...props }: Props) => {
  const { onLoad, loaded, refPhoto } = PhotoLoad();

  return (
    <Styled.Card
      {...props}
      style={{ width: '300px', margin: '10px' }}
      cover={
        <Styled.Photo
          alt="Project cover"
          src={`${process.env.PUBLIC_URL}/assets/project_cover.jpg`}
          ref={refPhoto}
          onLoad={onLoad}
          hide={!loaded}
        />
      }
      actions={[
        <Button type="text" href={urlGithub} target="_blank">
          <BranchesOutlined style={{ fontSize: '20px' }} />
        </Button>,
        <Button type="text" href={urlCode} target="_blank">
          <CodeOutlined style={{ fontSize: '22px' }} />
        </Button>,
        <Button type="text" href={urlDemo} target="_blank">
          <DesktopOutlined style={{ fontSize: '22px' }} />
        </Button>,
      ]}>
      <Meta avatar={<Avatar src={avatar} />} title={title} description={description} />
      <Styled.TagContainer>
        {tags.map((tag, idx) => (
          <Tag key={idx} color="#389e0d" style={{ marginBottom: '5px' }}>
            {tag}
          </Tag>
        ))}
      </Styled.TagContainer>
    </Styled.Card>
  );
};
