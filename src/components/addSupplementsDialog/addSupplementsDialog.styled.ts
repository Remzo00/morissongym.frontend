import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: ${(props) => props.theme.colors.black};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.colors.white_gray};
  margin-bottom: 40px;
`;

export const Text = styled.text`
  
  color: ${(props) => props.theme.colors.white_gray};
 
  
`;

export const Labels = styled.label`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  border-radius: 6px;
  background-color: #141414;
  width: 90%;
  height: 40px;
  margin: 20px 20px;
  font-weight:500;
  cursor: pointer;
  &:hover{
    background-color: ${(props)=> props.theme.colors.lime};
  }
 
`;

export const GroupBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 40px;
  margin-right: 40px;
  font-weight:500;
`;

export const ConfirmButton = styled.button`
  width: 110px;
  height: 35px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;
  font-weight:400;
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.colors.confirm_btn};
  &:hover{
    background-color: ${(props)=> props.theme.colors.green};
  }
 
`;
export const CancelButton = styled.button`
  width: 110px;
  height: 35px;
  cursor: pointer;
  border: none;
  font-size: 15px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.cancel_btn};
  color: ${(props) => props.theme.colors.white};
  &:hover{
    background-color: ${(props)=> props.theme.colors.red};
  }
 
  
`;
