import styled from 'styled-components';
import { Carousel as AntdCarousel } from 'antd';
import { colors } from 'styles';

export const ItemContainer = styled.div`
  height: 200px;
  color: ${colors.white};
  line-height: 160px;
  text-align: center;
  background: ${colors.black};
`;

export const Carousel: typeof AntdCarousel = styled(AntdCarousel)`
  .slick-dots > li > button {
    background-color: ${colors.green};
  }
  .slick-dots > li.slick-active > button {
    background-color: ${colors.green};
  }

  .ant-carousel,
  .slick-slider,
  .slick-list {
    border-radius: 8px;
  }
`;

export const CarouselContainer = styled.div`
  max-width: 500px;
  margin: 40px auto 0;
`;

export const Paragraph = styled.p`
  color: var(--text-color);
  text-align: center;
`;
