import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

// It is a component, so with uppercase, under the hood, it creates a random named css class, and uses it.
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

// This name is a convention
const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      {/* Global styles is a sibling of the other components and get used globally */}
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}
