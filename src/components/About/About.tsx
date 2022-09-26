import Me from '../../assets/me.jpg';

import * as Styled from './About.styles';

export const About = () => {
  return (
    <Styled.Wrapper id="about">
      <Styled.Greeting>
        <Styled.Cloud>
          Hi there! <Styled.Hand>🖐</Styled.Hand>
        </Styled.Cloud>
        <Styled.Photo src={Me} alt="Me" title="Patryk Makarewicz" />
      </Styled.Greeting>
      <Styled.Text $marginBottom="10px">
        My name is Patryk and I’m <Styled.TextGreen>Frontend developer | React.</Styled.TextGreen>
      </Styled.Text>
      <Styled.Text>
        You might be interested in checking the list of my skills . Don’t forget to have a glimpse at my projects.
        Currently I’m looking for new challenges so if you have one - contact me 😊.
      </Styled.Text>
    </Styled.Wrapper>
  );
};
