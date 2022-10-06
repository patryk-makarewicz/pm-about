import styled, { css } from 'styled-components';
import { colors, fontSize } from 'styles';

type FormProps = {
  $error?: boolean;
};

export const Container = styled.div`
  position: relative;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: ${fontSize.s};
  color: ${colors.warning};
`;

export const Label = styled.label`
  font-size: ${fontSize.s};
`;

export const Input = styled.input<FormProps>`
  box-shadow: inset 0px 0px 10px -6px rgba(66, 68, 90, 1);
  margin: 0 0 20px 0;
  width: 100%;
  height: 32px;
  padding: 0 15px;
  font-size: ${fontSize.s};
  border: 1px solid #cccbcb;
  border-radius: 10px;
  ${({ $error = false }) =>
    $error &&
    css`
      border: 1px solid ${colors.warning};
    `}

  &:focus {
    outline-style: inherit;
    border: 1px solid ${colors.green};
  }
`;

export const Textarea = styled.textarea<FormProps>`
  box-shadow: inset 0px 0px 10px -6px rgba(66, 68, 90, 1);
  margin: 0 0 20px 0;
  width: 100%;
  height: 122px;
  padding: 5px 15px;
  font-size: ${fontSize.s};
  border: 1px solid #cccbcb;
  border-radius: 10px;
  ${({ $error = false }) =>
    $error &&
    css`
      border: 1px solid ${colors.warning};
    `}

  &:focus {
    outline-style: inherit;
    border: 1px solid ${colors.green};
  }
`;
