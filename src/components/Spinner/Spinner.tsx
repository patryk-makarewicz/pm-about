import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import * as Styled from './Spinner.styles';

export const Spinner = () => {
  const icon = <LoadingOutlined style={{ fontSize: 36 }} spin />;

  return (
    <Styled.Wrapper>
      <Spin indicator={icon} />
    </Styled.Wrapper>
  );
};
