import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 787px) {
    margin-top: 5rem;
  }
`;

export const A = styled.a`
  color: var(--white);
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
