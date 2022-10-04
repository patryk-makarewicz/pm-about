import { Form, FormItemProps } from 'antd';
import styled, { css } from 'styled-components';

type FieldProps = FormItemProps & {
  $uppercaseLabel?: boolean;
  $width?: string;
  $marginBottom?: string;
};

export const FormField: React.FC<FieldProps> = styled(Form.Item)<FieldProps>`
  &&&.ant-form-item-with-help {
    margin-bottom: 0px;
  }

  ${({ $width }) =>
    $width
      ? css`
          width: ${$width};
        `
      : ''}
  ${({ $uppercaseLabel }) =>
    $uppercaseLabel
      ? css`
          .ant-form-item-label label {
            text-transform: uppercase;
          }
        `
      : ''}

${({ $marginBottom }) =>
    $marginBottom
      ? css`
          &.ant-form-item {
            margin-bottom: ${$marginBottom};
          }
        `
      : ''}

.ant-form-item-label label {
    &::before {
      display: none !important;
    }
  }
`;
