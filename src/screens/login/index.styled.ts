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
`;

export const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  margin-top: 25px;
  margin-left: 100px;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 150px;
  border-radius: 10px;
`;
