import { IoIosFitness } from "react-icons/io";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 9vw;
  height: 100vh;
  background-color: #1b4469;
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
