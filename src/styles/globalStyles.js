import { createGlobalStyle } from "styled-components";
import normalize from "normalize.css";

const GlobalStyles = createGlobalStyle`
${normalize}
*,*::after,*::before {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,body {
  height: 100%;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F9FAD0;

}

`;

export default GlobalStyles;
