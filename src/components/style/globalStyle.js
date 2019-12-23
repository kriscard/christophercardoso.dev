import { createGlobalStyle } from "styled-components"
import 'typeface-lato';


/* colors:
white: #FFFFFF
green: #01BEAE
black: #262340
dark: #333333
*/

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-size: 1rem;
  font-family: 'Lato', sans-serif;
  color: #262340;
  line-height: 1.55;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;

  @media (min-width: 780px) {
    font-size: 1.25rem;
  }

  @media (min-width: 480px) {
    font-size: 1.125rem;
  }
}

h1 {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.15;
  padding: 10px;
  margin: 0;
  color: #262340;

  @media (max-width: 780px) {
    font-size: 2rem;
    max-width: 50rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    max-width: 50rem;
  }
}

p {
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
[data-aos="fade-up"] {
  overflow: hidden;
  transition: transform 1000ms ease-in-out 0.5s;
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
