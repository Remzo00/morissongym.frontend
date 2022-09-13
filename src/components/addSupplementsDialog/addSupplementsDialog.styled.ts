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
  color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.text`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
`;

export const Labels = styled.label`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #141414;
  width: 90%;
  height: 30px;
  margin: 10px;
  margin-left: 20px;
  cursor: pointer;
`;

export const GroupBtn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-right: 50px;
`;

export const ConfirmButton = styled.button`
  width: 110px;
  height: 35px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.colors.green};
`;
export const CancelButton = styled.button`
  width: 110px;
  height: 35px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
`;
