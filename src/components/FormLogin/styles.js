import styled, { css } from "styled-components";

import IconUser from "../../assets/figma_imgs/IconUser.png";
import IconUserError from "../../assets/figma_imgs/IconUserError.png";

export const Article = styled.article`
  justify-content: center;
  display: flex;
  margin-top: 1rem;

  @media (min-width: 787px) {
    margin-top: 5rem;
  }
`;

// svg {
//   width: 2rem;
//   height: 2rem;
//   // color: green;
//   // background-image: url(${IconUserError});
// }

// ${(props) =>
//   props.isErrored &&
//   css`
//     svg {
//       // background-image: url(${IconUserError});
//       // color: red;
//     }
//   `}

export const A = styled.a`
  color: #fff;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
