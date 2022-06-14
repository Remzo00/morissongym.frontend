import React from "react";
import { PasswordInput, TextInput, Button, Title } from "@mantine/core";
import { Wrapper, LoginContainer, LoginInput } from "./index.styled";
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
            styles={{
              label: { color: "white" },
            }}
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

export default Login;
