import ThemeButton from "../themeButton";
import { EmployesNameTxt, InlineTxt, Input, Main, Text } from "./header.styled";

const Header = () => {
  return (
    <Main>
      <Text>
        <InlineTxt>gym</InlineTxt>panel
      </Text>

      <ThemeButton />
      <EmployesNameTxt>Employes Name</EmployesNameTxt>
    </Main>
  );
};

export default Header;
