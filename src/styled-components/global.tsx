import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','Liberation Mono',"Courier New",'monospace'
   }
   #root {
       margin:0 auto;
   }

   main {
    position: relative;
    max-width: 1920px;
    margin: auto;
   }
`;
