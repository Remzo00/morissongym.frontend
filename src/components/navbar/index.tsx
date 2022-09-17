import Icons from "../../assets/icons";
import { Wrapper, Text, StyledLink } from "./index.styled";
import cx from "classnames";

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink to={"/"}>
        <Text>
          <Icons.Home /> Home
        </Text>
      </StyledLink>
      <StyledLink to={"/daily"}>
        <Text>
          {" "}
          <Icons.Daily /> Daily
        </Text>
      </StyledLink>
      <StyledLink to={"/members"}>
        <Text>
          {" "}
          <Icons.Members /> Members
        </Text>
      </StyledLink>
      <StyledLink to={"/coachs"}>
        <Text>
          <Icons.Members /> Coach
        </Text>
      </StyledLink>
      <StyledLink to={"/settings"}>
        <Text>
          <Icons.Settings /> Settings
        </Text>
      </StyledLink>
    </Wrapper>
  );
};

export default Navbar;
