import styled from "styled-components";

export const Main = styled.main`
  overflow: hidden;
`;

export const P2 = styled.h3`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 1.5rem;
  right: 34rem;
  color: var(--white);
  font-weight: 800;
`;

export const A = styled.a`
    position: absolute;
    z-index: 1;
    top: 0.5rem;
    right: 6rem;
    color: var(--alphaBlack);
    font-weight: 800;
    font-size: xx-large;

  &:hover {
    background-color: var(--blue)
    cursor: pointer;
    text-decoration: underline;
  }
`;
