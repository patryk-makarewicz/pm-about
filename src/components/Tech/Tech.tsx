import { Card } from 'components/Card';
import { techData } from 'helpers/tech';

import * as Styled from './Tech.styles';

export const Tech = () => {
  return (
    <Styled.Wrapper id="tech">
      <h2>Technologie</h2>
      <Styled.CardBox>
        {techData.map((tech) => (
          <Card key={tech.id} title={tech.name}>
            <Styled.Logo src={tech.logo} alt={`${tech.name} logo`} />
          </Card>
        ))}
      </Styled.CardBox>
    </Styled.Wrapper>
  );
};
