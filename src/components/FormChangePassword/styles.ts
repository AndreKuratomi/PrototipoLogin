import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const A = styled.a`
  color: var(--white);
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;
