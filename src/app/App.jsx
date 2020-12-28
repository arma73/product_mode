// Core
import { hot } from "react-hot-loader/root";
import { createGlobalStyle } from "styled-components";

// Styles
import "normalize.css";
import "_theme/main.css";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: blue;
    }
`;

const App = () => (
    <React.StrictMode>
        <GlobalStyle />
        <h1>Hello world</h1>
        <span> Font check </span> 
    </React.StrictMode>
);

export default hot(App);
