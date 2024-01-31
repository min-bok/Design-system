import React from "react";
import styled from "styled-components";
import { useThemeStore } from "../../store/ThemeStore";
export default function BasicButton({
  children,
  color,
  type
}) {
  const {
    currnetTheme
  } = useThemeStore();
  if (type === "contained") {
    return /*#__PURE__*/React.createElement(Button, {
      className: "contained",
      type: type,
      color: color || currnetTheme
    }, children);
  } else if (type === "outlined") {
    return /*#__PURE__*/React.createElement(Button, {
      className: "outlined",
      type: type,
      color: color || currnetTheme
    }, children);
  } else if (type === "text") {
    return /*#__PURE__*/React.createElement(Button, {
      className: "text",
      type: type,
      color: color || currnetTheme
    }, children);
  }
}
const Button = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({
  color
}) => color};
  color: var(--light-color);
  box-shadow: var(--button-shadow);

  /* --- contained --------------- */
  &.contained {
    background-color: ${({
  color
}) => color};
    color: var(--light-color);
  }

  &.contained:hover {
    background-color: var(--hover-color);
  }

  /* --- outlined --------------- */
  &.outlined {
    background-color: var(--light-color);
    color: ${({
  color
}) => color};
    outline: ${({
  color
}) => `1.75px solid ${color}`};
  }

  &.outlined:hover {
    color: var(--light-color);
    background-color: var(--hover-color);
  }

  /* --- text --------------- */
  &.text {
    background-color: var(--light-color);
    color: ${({
  color
}) => color};
    box-shadow: none;
  }

  &.text:hover {
    color: var(--light-color);
    background-color: var(--hover-color);
  }
`;