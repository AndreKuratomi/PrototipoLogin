import styled, { css } from "styled-components";

import User from "../../assets/figma_imgs/User.png";
import UserError from "../../assets/figma_imgs/UserError.png";

export const Article = styled.article`
  justify-content: center;
  display: flex;
  margin-top: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    // color: green;
    // background-image: url(${UserError});
  }

  ${(props) =>
    props.isErrored &&
    css`
      svg {
        // background-image: url(${UserError});
        // color: red;
      }
    `}

  @media (min-width: 787px) {
    margin-top: 5rem;
  }
`;

// export const Image = styled.div``;

// export const ImageError = styled.div`
//   width: 2rem;
//   height: 2rem;
// `;

export const A = styled.a`
  color: #fff;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
