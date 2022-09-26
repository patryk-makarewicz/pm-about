import styled, { css } from 'styled-components';
import { colors } from 'styles/colors';
import { fontSize, fontWeight, shadow } from 'styles/variables';

type TextProps = {
  $marginBottom?: string;
};

export const Wrapper = styled.section`
  padding: 20px 0;
`;

export const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid ${colors.white};
  box-shadow: ${shadow.first};
  margin-bottom: 10px;
`;

export const Greeting = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Cloud = styled.div`
  position: relative;
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 8px;
  padding: 10px;
  font-weight: ${fontWeight.semiBold};
  box-shadow: ${shadow.first};
  margin-bottom: 10px;
  margin-left: 120px;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 60%;
    margin-left: -50px;
    width: 0;
    height: 0;
    border-top: solid 5px var(--background-color);
    border-left: solid 5px transparent;
    border-right: solid 5px transparent;
  }
`;

export const Hand = styled.span`
  @keyframes wave {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }
  display: inline-block;
  animation: wave 1.5s ease-in-out infinite;
  transform-origin: center center;
`;

export const Text = styled.p<TextProps>`
  color: var(--text-color);
  font-size: ${fontSize.m};
  margin: 0 auto;
  ${({ $marginBottom }) =>
    $marginBottom &&
    css`
      margin-bottom: ${$marginBottom};
    `}
  max-width: 500px;
  text-align: center;
`;

export const TextGreen = styled.span`
  color: ${colors.green};
  font-weight: ${fontWeight.bold};
`;
