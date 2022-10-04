import styled from 'styled-components';
import { Form as AntdForm } from 'antd';
import { fontSize, margin } from 'styles/variables';

export const SectionTitle = styled.h2`
  font-size: ${fontSize.xl};
  margin-bottom: ${margin.xl};
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: center;
`;

export const FormBox = styled.div`
  max-width: 500px;
  margin: 40px auto 60px auto;
`;

export const Form: typeof AntdForm = styled(AntdForm)`
  .ant-row {
    justify-content: center;
  }

  .ant-input {
    box-shadow: inset 0px 0px 10px -6px rgba(66, 68, 90, 1);
  }

  .ant-form-item-with-help {
    margin-bottom: 24px !important;
  }
`;
