import { Card } from 'components/Card';

import ReactLogo from '../../assets/logo/logo-react.png';
import TsLogo from '../../assets/logo/logo-ts.png';
import JsLogo from '../../assets/logo/logo-js.png';
import ApiLogo from '../../assets/logo/logo-api.png';
import HtmlLogo from '../../assets/logo/logo-html5.png';
import CssLogo from '../../assets/logo/logo-css3.png';

import * as Styled from './Tech.styles';

export const Tech = () => {
  return (
    <Styled.Wrapper id="tech">
      <Styled.CardBox>
        <Card title="React">
          <Styled.Logo src={ReactLogo} alt="Logo" />
        </Card>
        <Card title="TypeScript">
          <Styled.Logo src={TsLogo} alt="Logo" />
        </Card>
        <Card title="JavaScript">
          <Styled.Logo src={JsLogo} alt="Logo" />
        </Card>
        <Card title="rest API">
          <Styled.Logo src={ApiLogo} alt="Logo" />
        </Card>
        <Card title="HTML">
          <Styled.Logo src={HtmlLogo} alt="Logo" />
        </Card>
        <Card title="CSS">
          <Styled.Logo src={CssLogo} alt="Logo" />
        </Card>
      </Styled.CardBox>

      {/* TODO -> Logo */}

      <h2>Tech</h2>
      <div>
        <article>
          <ul>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; Recoil / Context API / Redux
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; Rest API
            </li>

            <li>
              <img src="../assets/img/small-tick-2.svg" alt="small tick" />
              &nbsp; Next.js
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; MFA
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; CSS3 / SASS
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; BEM methodology
            </li>

            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; GIT / GitFlow
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; ESLint / Prettier
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; NPM
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; RWD
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; Ant Design/ Material-UI
            </li>
            <li>
              <img src="../assets/img/small-tick.svg" alt="small tick" />
              &nbsp; Figma / Adobe XD
            </li>
            <li>
              <img src="../assets/img/small-tick-2.svg" alt="small tick" />
              &nbsp; PWA
            </li>
          </ul>
        </article>
      </div>
    </Styled.Wrapper>
  );
};
