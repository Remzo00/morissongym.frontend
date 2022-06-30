import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 9vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};

  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 30px;
`;

export const StyledLink = styled(Link)`
  & > svg {
    fill: white;
    padding-top: 2.7rem;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  padding-bottom: 4rem;
`;
