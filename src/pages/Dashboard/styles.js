import styled from "styled-components";

export const LeftBar = styled.header`
  display: ${(props) => (props.hide ? "none" : "block")};
`;

export const A = styled.a`
  color: #fff;
  font-weight: 500;

  &:hover {
    background-color: #00f
    cursor: pointer;
    text-decoration: underline;
  }
`;
