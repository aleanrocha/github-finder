import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: #04010a;
    color: #fafafa;
  }
`
