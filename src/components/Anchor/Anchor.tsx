import * as Styled from './Anchor.styles';
import { Anchor as AntdAnchor } from 'antd';

const { Link } = AntdAnchor;

type AnchorProps = {
  paths: {
    href: string;
    title: string;
  }[];
  mobile?: boolean;
  onClick?: () => void;
};

export const Anchor = ({ paths, mobile = false, onClick }: AnchorProps) => {
  return (
    <Styled.Anchor affix={false} targetOffset={95} onClick={onClick} mobile={mobile}>
      {paths.map((path) => (
        <Link key={path.href} href={path.href} title={path.title} />
      ))}
    </Styled.Anchor>
  );
};
