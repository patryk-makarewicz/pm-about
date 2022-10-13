import { Avatar, Tag, Card, CardProps } from 'antd';
import * as Styled from './CardProjects.styles';
import { BranchesOutlined, CodeOutlined } from '@ant-design/icons';
import { Button } from 'components/Button';

const { Meta } = Card;

type CardProjectsProps = {
  avatar: string;
  title: string;
  description: string;
  tags: string[];
  urlGithub: string;
  urlCode: string;
};

type Props = CardProjectsProps & CardProps;

export const CardProjects = ({ avatar, title, description, tags, urlGithub, urlCode, ...props }: Props) => (
  <Card
    {...props}
    style={{ width: '100%' }}
    cover={<img alt="Project cover" src={`${process.env.PUBLIC_URL}/assets/project_cover.jpg`} />}
    actions={[
      <Button type="text" href={urlGithub} target="_blank" disabled={props.loading}>
        <BranchesOutlined style={{ fontSize: '20px' }} />
      </Button>,
      <Button type="text" href={urlCode} target="_blank" disabled={props.loading}>
        <CodeOutlined style={{ fontSize: '22px' }} />
      </Button>
    ]}>
    <Meta avatar={<Avatar src={avatar} />} title={title} description={description} />
    <Styled.TagContainer>
      {tags.map((tag, idx) => (
        <Tag key={idx} color="#389e0d" style={{ marginBottom: '5px' }}>
          {tag}
        </Tag>
      ))}
    </Styled.TagContainer>
  </Card>
);
