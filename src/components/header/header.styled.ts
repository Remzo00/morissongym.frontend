import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: ${(props) => props.theme.colors.black};
`
export const Text = styled.h1`
    color: ${(props) => props.theme.colors.white};
`
export const EmployesNameTxt = styled.h3`
    color: ${(props) => props.theme.colors.white};
    margin-top: 27px;
`
export const InlineTxt = styled.span`
    color: ${(props) => props.theme.colors.green}
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.colors.black};
  border-color: grey;
  border-radius: 6px;
  width: 50vh;
  height: 30px;
  margin-top: 20px;
  color: ${(props) => props.theme.colors.white};
`

/* export const EmployesName = styled.div`

` */