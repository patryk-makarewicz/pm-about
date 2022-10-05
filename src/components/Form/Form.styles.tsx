import styled from 'styled-components';
import { colors, fontSize } from 'styles';

export const Label = styled.label`
  font-size: ${fontSize.s};
`;

export const Input = styled.input`
  box-shadow: inset 0px 0px 10px -6px rgba(66, 68, 90, 1);
  margin: 0 0 20px 0;
  width: 100%;
  height: 32px;
  padding: 0 15px;
  font-size: ${fontSize.s};
  border: 1px solid #cccbcb;
  border-radius: 10px;

  &:focus {
    outline-style: inherit;
    border: 1px solid ${colors.green};
  }
`;

export const Textarea = styled.textarea`
  box-shadow: inset 0px 0px 10px -6px rgba(66, 68, 90, 1);
  margin: 0;
  width: 100%;
  height: 122px;
  padding: 5px 15px;
  font-size: ${fontSize.s};
  border: 1px solid #cccbcb;
  border-radius: 10px;

  &:focus {
    outline-style: inherit;
    border: 1px solid ${colors.green};
  }
`;
