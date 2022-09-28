import { Card } from 'components/Card';

import HtmlLogo from '../../assets/logo/logo-html5.png';
import CssLogo from '../../assets/logo/logo-css3.png';
import ReactLogo from '../../assets/logo/logo-react.png';
import JsLogo from '../../assets/logo/logo-js.png';
import * as Styled from './Tech.styles';

export const Tech = () => {
  return (
    <Styled.Wrapper id="tech">
      <Styled.CardBox>
        <Card title="React">
          <img src={ReactLogo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        </Card>
        <Card title="JavaScript">
          <img src={JsLogo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        </Card>
        <Card title="HTML">
          <img src={HtmlLogo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        </Card>
        <Card title="CSS">
          <img src={CssLogo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        </Card>
      </Styled.CardBox>

      <h2>Tech</h2>
      <div>
        <article>
          <ul>
            <li>
              <img src="../assets/img/small-tick-2.svg" alt="small tick" />
              &nbsp; TypeScript
            </li>
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
