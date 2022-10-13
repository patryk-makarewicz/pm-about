import * as Styled from './CardProjects.styles';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Tag } from 'antd';

const { Meta } = Card;

type CardProjectsProps = {
  title: string;
  description: string;
  tags: string[];
};

export const CardProjects = ({ title, description, tags }: CardProjectsProps) => (
  <Card
    style={{ width: '100%' }}
    cover={<img alt="Project cover" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]}>
    <Meta avatar={<Avatar src={`${process.env.PUBLIC_URL}/assets/me.jpg`} />} title={title} description={description} />
    <Styled.TagContainer>
      {tags.map((tag, idx) => (
        <Tag key={idx} color="#389e0d">
          {tag}
        </Tag>
      ))}
    </Styled.TagContainer>
  </Card>
);
