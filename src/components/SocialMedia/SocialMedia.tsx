import { Row, Space } from 'antd';

import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/linkedin.svg';
import * as Styled from './SocialMedia.styles';

type SocialMediaType = {
  $white?: boolean;
};

export const SocialMedia = ({ $white }: SocialMediaType) => (
  <Row justify="center">
    <Space>
      <Styled.ButtonIcon
        $white={$white}
        href="https://www.linkedin.com/in/patryk-makarewicz/"
        target="_blank"
        title="Go to LinkedIn">
        <LinkedIn width={36} height={36} />
      </Styled.ButtonIcon>
      <Styled.ButtonIcon
        $white={$white}
        href="https://github.com/patryk-makarewicz"
        target="_blank"
        title="Go to Github">
        <Github width={36} height={36} />
      </Styled.ButtonIcon>
    </Space>
  </Row>
);
