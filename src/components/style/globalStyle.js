import { createGlobalStyle } from "styled-components"

require("typeface-open-sans")
require("typeface-roboto")

/* colors to use:
white: #FFFFFF
green: #01BEAE
black: #262340
dark: #333333
*/

export default GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-size: 1rem;
  font-family: 'Open-sans', sans-serif;
  color: #FFFFFF;
  line-height: 1.55;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;

  @media (min-width: 767px) {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
}
  h1 {
    font-family: 'Open-sans', sans-serif;
    color: #262340;
    line-height: 1.55;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: inherit;
    line-height: 1.55;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

 a, button {
  cursor: pointer;
  text-decoration: none;
}

a:focus {
  outline: none;
}

button:focus {
  outline: none;
}

img {
  display: block;
  max-width: 100%;
}
`
