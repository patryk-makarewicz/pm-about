import styled from 'styled-components';
import { Carousel as AntdCarousel } from 'antd';
import { fontSize, margin } from 'styles/variables';
import { colors } from 'styles';

export const ItemContainer = styled.div`
  height: 200px;
  color: ${colors.dark};
  line-height: 160px;
  text-align: center;
  background: ${colors.gray};
`;

export const Carousel: typeof AntdCarousel = styled(AntdCarousel)`
  .slick-dots > li > button {
    background-color: ${colors.green};
  }
  .slick-dots > li.slick-active > button {
    background-color: ${colors.green};
  }
`;

export const CarouselContainer = styled.div`
  max-width: 500px;
  margin: 40px auto 0;
`;

export const SectionTitle = styled.h2`
  color: var(--text-color);
  font-size: ${fontSize.xl};
  margin-bottom: ${margin.xl};
  text-align: center;
`;

export const Paragraph = styled.p`
  color: var(--text-color);
  text-align: center;
`;
