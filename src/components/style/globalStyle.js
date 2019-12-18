import { createGlobalStyle } from "styled-components"

require("typeface-open-sans")
require("typeface-roboto")

/* colors to use:
white: #FFFFFF
green: #01BEAE
black: #262340
dark: #333333
*/

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-size: 1rem;
  font-family: 'Open-sans', sans-serif;
  color: #262340;
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
    font-size: 2.25rem;
    font-kerning: normal;
    font-weight: 700;
    line-height: 1.15;
    padding: 10px;
    margin: 0;
    color: #262340;

    @media (min-width: 992px) {
      font-size: 2rem;
      max-width: 40rem;
    }
}

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: normal;
    font-kerning: normal;
    line-height: 1.15;
    margin: 0;
    padding: 10px;
    color: #262340;

    @media (min-width: 992px) {
      font-size: 18px;
      max-width: 40rem;
    }
}

 a, button {
  cursor: pointer;
  text-decoration: none;
}

a:focus {
  outline: none;
  text-decoration: none;
}

button:focus {
  outline: none;
  text-decoration: none;
}
`

export default GlobalStyle
