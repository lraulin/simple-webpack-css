import React from "react";
import ReactDOM from "react-dom";
import cssModules from "react-css-modules";
import styles from "./index.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: red;
  width: 320px;
  padding: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  &:hover {
    color: #fff;
  }
  &:active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 480px) {
    width: 160px;
  }
`;

// const Button = () => <button styleName="button">Click me!</button>;
const EnhancedButton = cssModules(Button, styles);

ReactDOM.render(<Button>Click Me!</Button>, document.body);
