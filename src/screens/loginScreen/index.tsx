import React from "react";
import { PasswordInput, TextInput, Button, Title } from "@mantine/core";
import styled from "styled-components";
import backGround from "../../assets/images/backGround.png";

const Login = () => {
  return (
    <Wrapper>
      <LoginContainer>
        <LoginInput>
          {/* <h1>Sign In</h1> */}
          <Title
            order={1}
            align="center"
            style={{ marginBottom: 10, color: "white" }}
          >
            Sign In
          </Title>
          <TextInput
            placeholder="Your name or E-mail"
            label="Name or E-mail"
            required
            style={{ paddingTop: 15 }}
            styles={{ label: { color: "white" } }}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            description="Password must include at least one letter, number and special character"
            required
            style={{ paddingTop: 15 }}
            styles={{ label: { color: "white" } }}
          />
          <Button color="lime" radius="md" style={{ top: 25 }}>
            Sign in
          </Button>
        </LoginInput>
      </LoginContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 80vh;
  background-color: #1e1e1e;
  border-radius: 20px;
  opacity: 80%;
`;

const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Login;
