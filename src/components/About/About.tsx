import * as Styled from './About.styles';

export const About = () => {
  return (
    <Styled.Wrapper id="about">
      <p>Hi there!</p>
      <div>
        <p>
          My name is Patryk and I’m <br />
          <span>Frontend developer | React</span>.
        </p>
        <p>
          You might be interested in checking the list of my skills . Don’t forget to have a glimpse at my projects .
          Currently I’m looking for new challenges so if you have one - contact me 😊
        </p>
      </div>
    </Styled.Wrapper>
  );
};
