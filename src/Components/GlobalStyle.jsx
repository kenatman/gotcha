import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};
a{
text-decoration:none;
color:inherit;}

*{box-sizing:border-box;}

body{font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size:12px;
background-color: #353b48;
color: white;
padding-top:70px;
padding-left:10px;

}


`;

export default GlobalStyle;
