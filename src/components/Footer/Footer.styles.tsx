import styled from 'styled-components';
import { breakpoint, fontSize, shadow } from 'styles/variables';
import { Divider as AntdDivider } from 'antd';

export const LogoWrapper = styled.div`
  margin-bottom: 5px;

  @media screen and (min-width: ${breakpoint.l}) {
    margin-bottom: 0;
  }
`;

export const Divider = styled(AntdDivider)`
  height: 20px;
  margin: 0 20px;
  display: none;

  @media screen and (min-width: ${breakpoint.l}) {
    display: block;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: auto;
  border-top: 1px solid var(--border-color);
  box-shadow: ${shadow.second};
  background-color: var(--background-color);
  position: relative;
  top: 0;
  z-index: 1;

  @media screen and (min-width: ${breakpoint.l}) {
    height: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  padding: 10px;
  margin: auto;
  height: 100%;

  @media screen and (min-width: ${breakpoint.l}) {
    flex-direction: row;
    padding: 0 10px;
  }
`;

export const Text = styled.p`
  color: var(--text-color);
  font-size: ${fontSize.s};
  margin: 0;
  text-align: center;
`;
