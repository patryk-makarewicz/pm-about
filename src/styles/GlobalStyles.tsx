import { createGlobalStyle } from 'styled-components';
import './antd-customized.scss';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  color: #242424;
  background-color: #ffffff;
  font-size: 16px;
}

a {
  color: inherit;
  text-decoration: none;
}

:root {
  --text-color: #242424;
  --background-color: #ffffff;
  --background-secondary-color: #ffffff;
  --border-color: #e5e5e5;
}

[data-theme='dark'] {
  --text-color: #ffffff;
  --background-color: #242424;
  --background-secondary-color: #2b2f34;
  --border-color: #242424;
}
`;

export default GlobalStyles;
