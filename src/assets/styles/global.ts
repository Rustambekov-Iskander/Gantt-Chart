import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      scroll-behavior: smooth;
    }
    body {
      font-family: "Roboto", sans-serif;
      overflow-x: hidden;
      padding: 0;
      margin: 0;
    }
    a {
      color: inherit;
    }
    
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      @media (max-width: 600px) {
        width: 5px;
        height: 5px;
      }
      &-track {
        background: #f1f1f1;
      }
      &-thumb {
        background: #888;
        :hover {
          background: #555;
        }
      }
    }
    
    .container {
      max-width: 1200px;
      width: 100%;
      padding: 0 25px;
      margin: 0 auto;
    }
`
