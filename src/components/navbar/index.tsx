import React from "react";
import Icons from "../../assets/icons";
import { Wrapper, StyledLink, LogoWrapper } from "./index.styled";

const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <StyledLink to={"/"}>
          <Icons.Logo />
        </StyledLink>
      </LogoWrapper>
      <StyledLink to={"/home"}>
        <Icons.Home />
      </StyledLink>
      <StyledLink to={"/daily"}>
        <Icons.Daily />
      </StyledLink>
      <StyledLink to={"/members"}>
        <Icons.Members />
      </StyledLink>
      <StyledLink to={"/settings"}>
        <Icons.Settings />
      </StyledLink>
    </Wrapper>
  );
};

export default Navbar;
