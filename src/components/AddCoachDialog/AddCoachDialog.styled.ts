import styled from "styled-components";

export const Main = styled.div`
  margin-top: 32px;
`;
export const Wrapper = styled.div`
  margin: 10%;
`;
export const Title = styled.h1`
  margin-left: 35%;
  margin-bottom: -5%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 30px;
  color: ${(props) => props.theme.colors.black};
`;
export const Text = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.black};
`;
export const Input = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 100%;
  height: 30px;
  margin: 10px;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-right: 50px;
`;
export const ConfirmButton = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.colors.green};
`;
export const CancelButton = styled.button`
  width: 150px;
  height: 35px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.red};
  color: #ffffff;
`;
