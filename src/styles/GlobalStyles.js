import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      font-size: 62.5%;
    }

    body {
      font-family: "Inter", sans-serif;
      background: linear-gradient(340deg, rgba(103,228,255,1) 28%, rgba(12,127,138,1) 100%);
    }
`;
