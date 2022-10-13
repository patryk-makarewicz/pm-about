import * as Styled from './SectionTitle.styles';

type SectionTitleType = {
  title: string;
  darkMode?: boolean;
};

export const SectionTitle = ({ title, darkMode }: SectionTitleType) => (
  <Styled.SectionTitle darkMode={darkMode}>{title}</Styled.SectionTitle>
);
