import React from "react";
import styled from "styled-components";
export default function BasicButton({
  children,
  color = "pink"
}) {
  return /*#__PURE__*/React.createElement(Button, {
    color: color
  }, children);
}
const Button = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({
  color
}) => color};
`;