import { Card as AntdCard } from 'antd';
import styled, { css } from 'styled-components';

type PhotoProps = {
  hide: boolean;
};

export const Card: typeof AntdCard = styled(AntdCard)`
  .ant-card-meta {
    min-height: 78px;
  }
`;

export const Photo = styled.img<PhotoProps>`
  width: 100%;
  height: 100%;
  transition: ease 1s all;
  ${({ hide }) =>
    hide
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;

export const TagContainer = styled.div`
  margin-top: 20px;
  margin-left: 48px;
  min-height: 165px;
`;
