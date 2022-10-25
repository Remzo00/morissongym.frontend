import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #1a1b1e;
  padding: 0px 50px 0px 50px;
  min-width: auto;
`;
export const Employe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const EmployeesImg = styled.img`
  border-radius: 50%;
  width: 55px;
  height: 55px;
  border: 1px solid white;
`;
export const EmployesNameTxt = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 20px;
`;
export const InlineTxt = styled.span`
  color: ${(props) => props.theme.colors.green};
  font-size: 30px;
  font-style: italic;
  font-weight: 1000;
`;

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.black};
  border-color: grey;
  border-radius: 6px;
  width: 50vh;
  height: 30px;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.white};
`;
