import { Row, Space } from 'antd';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import * as Styled from './SocialMedia.styles';

export const SocialMedia = () => (
  <Row justify="center">
    <Space>
      <Styled.ButtonIcon href="https://www.linkedin.com/in/patryk-makarewicz/" target="_blank" title="Go to LinkedIn">
        <LinkedIn width={36} height={36} />
      </Styled.ButtonIcon>
      <Styled.ButtonIcon href="https://github.com/patryk-makarewicz" target="_blank" title="Go to Github">
        <Github width={36} height={36} />
      </Styled.ButtonIcon>
    </Space>
  </Row>
);
