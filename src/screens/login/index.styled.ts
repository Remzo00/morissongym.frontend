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

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 80vh;
  background-color: #1e1e1e;
  border-radius: 20px;
  opacity: 80%;
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
`;
