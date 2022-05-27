import styled from "styled-components";

function App() {
  return <Button color={"green"}>Morrison Gym</Button>;
}

const Button = styled.div<{ color: string }>`
  width: 100px;
  background-color: ${(props) => props.theme.colors.black};
`;

export default App;
