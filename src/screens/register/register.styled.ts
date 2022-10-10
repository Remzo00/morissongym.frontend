import styled from "styled-components";
import backGround from "../../assets/images/backGround.png";

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backGround});
`;
export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 80vh;
  background-color: #1e1e1e;
  border-radius: 20px;
`;
export const RegisterInput = styled.form`
  display: flex;
  flex-direction: column;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 50px;
`;
export const ConfirmButton = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 10px;
  margin-right: 10px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  background: ${(props) => props.theme.colors.green};
`;
export const CancelButton = styled.button`
  width: 150px;
  height: 35px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.red};
  color: #ffffff;
`;
