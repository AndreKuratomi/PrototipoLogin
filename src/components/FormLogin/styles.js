import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 197px;
  margin-top: 1rem;
  @media screen and (min-width: 1024px) {
    width: 40rem;
  }
`;

export const Input = styled.input`
  margin-bottom: 0.5rem;
  max-width: 197px;
  padding: 0.5rem;
  text-align: left;
`;
