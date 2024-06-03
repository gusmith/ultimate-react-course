import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
        <Heading type="h1">The Wild Oasis</Heading>
        <Heading type="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>
        {/* The props `as` also tell styled-components to use the html tag defined in the `as` */}
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}
