import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 17vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  flex-direction: column;
`;
 
export const Active = styled(NavLink)`
  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 0px 10px 10px 0px;
  display: flex;
  text-decoration: none;
  margin: 10px 10px;
  padding-left: 10px;
`

export const Text = styled.h1`
& > svg{
  fill: ${(props) => props.theme.colors.white};
  height: 24px;
}
  color: #fff;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  font-style: italic;
`

// export const Text = styled.h1`
//   color: #fff;
// `
// export const Wrap = styled.div`
//   display: flex;
// `
// export const StyledLink = styled(Link)`
//   & > svg {
//     fill: ${(props) => props.theme.colors.white};
//     padding-top: 2.7rem;
//     margin-right:15vh ;
  
//   }
// `;
