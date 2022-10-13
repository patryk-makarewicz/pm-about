import { ReactComponent as Github } from '../../assets/github.svg';
import { Avatar, Card, Tag } from 'antd';
import * as Styled from './CardProjects.styles';

const { Meta } = Card;

type CardProjectsProps = {
  avatar: string;
  title: string;
  description: string;
  tags: string[];
  urlGithub: string;
  urlCode: string;
};

export const CardProjects = ({ avatar, title, description, tags, urlGithub, urlCode }: CardProjectsProps) => (
  <Card
    style={{ width: '100%' }}
    cover={<img alt="Project cover" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[
      <a href={urlGithub} target="_blank">
        <Github width={25} height={25} key="github" />
      </a>,
      <a href={urlCode} target="_blank">
        <Github width={25} height={25} key="github" />
      </a>
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
