import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
`;

export const LeftBar = styled.header`
  display: ${(props) => (props.hide ? "none" : "block")};
`;

export const P = styled.p`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 45rem;
  color: #fff;
  font-weight: 800;
`;

export const A = styled.a`
  position: absolute;
  z-index: 1;
  top: 1.5rem;
  right: 40rem;  
  color: #fff;
  font-weight: 800;

  &:hover {
    background-color: #00f
    cursor: pointer;
    text-decoration: underline;
  }
`;
