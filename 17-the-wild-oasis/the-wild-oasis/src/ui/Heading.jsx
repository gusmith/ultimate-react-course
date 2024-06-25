import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   background-color: yellow;
// `;

// It is a component, so with uppercase, under the hood, it creates a random named css class, and uses it.
// We can use js expression in this css
// We can also access props of this element
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

    line-height: 1.4;
`;

export default Heading;
