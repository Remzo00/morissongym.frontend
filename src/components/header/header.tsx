import ThemeButton from "../themeButton";
import {
  Employe,
  EmployeesImg,
  EmployesNameTxt,
  InlineTxt,
  Input,
  Main,
} from "./header.styled";

const Header = () => {
  return (
    <Main>
      <InlineTxt>GYMPANEl</InlineTxt>

      <Employe>
        <EmployeesImg src="https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg" />
        <EmployesNameTxt>Employes Name</EmployesNameTxt>
      </Employe>
    </Main>
  );
};

export default Header;
