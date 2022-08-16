import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    height: 100%;

    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #FE8931;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
        /* background: transparent; */
        border-radius: 5px;
    }
  }

  #__next{
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizelegibility;
    background: transparent;
  }

  body, input, button {
    font: 1rem 'Nunito', sans-serif;
    border: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
